import { mkdir, readdir, rmdir, writeFile } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

const mkdirAsync = promisify(mkdir);
const readdirAsync = promisify(readdir);
const rmdirAsync = promisify(rmdir);
const writeFileAsync = promisify(writeFile);

const componentPath = resolve(__dirname, '../src/components');
const { argv, exit } = process;
const [, , component, force = false] = argv;

const createDirectory = async (path: string) => {
  return mkdirAsync(path);
};

const createComponent = async (path: string, component: string) => {
  const name = component.charAt(0)
    .toUpperCase() + component.slice(1);
  return writeFileAsync(path, `import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'carage-${ component }',
  styleUrl: '${ component }.scss',
  shadow: true
})
export class ${ name } implements ComponentInterface {

  render() {
    return (
      <slot/>
    );
  }

}
`);
};

const createStyle = async (path: string) => {
  return writeFileAsync(path, `@import '../../styles/styles';
`);
};

const generate = async () => {
  const components = await readdirAsync(componentPath);
  if (components.includes(component)) {
    if (!force) {
      console.error(`The component "${ component }" does already exist`);
      exit(1);
    } else {
      await rmdirAsync(resolve(componentPath, component), { recursive: true });
    }
  }

  // prepare the folder
  await createDirectory(resolve(componentPath, component));

  // create the files
  await Promise.all([
    createComponent(resolve(componentPath, component, `${ component }.tsx`), component),
    createStyle(resolve(componentPath, component, `${ component }.scss`))
  ]);
};

generate();
