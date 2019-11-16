import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'carage-cars',
  styleUrl: 'cars.scss',
  shadow: true
})
export class Cars implements ComponentInterface {

  render() {
    return (
      <slot/>
    );
  }

}
