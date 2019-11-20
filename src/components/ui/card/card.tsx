import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'carage-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class card implements ComponentInterface {

  @Prop()
  closable = false;

  @Event()
  close: EventEmitter<void>;

  render() {
    return [
      <slot/>,
      this.closable && (
        <carage-button class="close"
                       onClick={ () => this.close.emit() }
        >
          close
        </carage-button>
      )
    ];
  }

}
