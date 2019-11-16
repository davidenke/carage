import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'carage-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button implements ComponentInterface {

  @Prop()
  expand = false;

  render() {
    return (
      <button type="button"
              class={ { expand: this.expand } }
      >
        <slot/>
      </button>
    );
  }

}
