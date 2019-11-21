import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

// const isDevelopment = process.argv && process.argv.includes('--dev');

// https://stenciljs.com/docs/config
export const config: Config = {
  globalStyle: 'src/styles/global.scss',
  namespace: 'carage',
  outputTargets: [
    {
      copy: [
        {
          src: '../node_modules/typeface-montserrat/files',
          dest: 'assets/fonts'
        }
      ],
      serviceWorker: null,
      type: 'www'
    }
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()]
    })
  ],
  preamble: 'Copyright 2019 by Carage'
};
