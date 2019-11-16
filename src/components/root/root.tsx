import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'carage-root',
  styleUrl: 'root.scss',
  shadow: true
})
export class Root implements ComponentInterface {

  render() {
    return (
      <main>
        Carage
      </main>
    );
  }

}
