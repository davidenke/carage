import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'carage-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button implements ComponentInterface {

  render() {
    return (
      <slot/>
    );
  }

}
