import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { FormComponent } from '../../../interfaces/form-component.interface';

@Component({
  tag: 'carage-edit-number',
  styleUrl: 'edit-number.scss',
  shadow: true
})
export class EditNumber implements FormComponent<number> {

  @Prop({ reflectToAttr: true })
  value: number;

  @Prop({ reflectToAttr: true })
  disabled = false;

  @Prop({ reflectToAttr: true })
  required = false;

  @Prop({ reflectToAttr: true })
  errored = false;

  @Prop({ reflectToAttr: true })
  placeholder = '';

  @Event()
  valueChanged!: EventEmitter<number>;

  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.valueChanged.emit(parseInt(value));
  }

  render() {
    return (
      <Host class={ {
        disabled: this.disabled,
        errored: this.errored,
        required: this.required
      } }
      >
        <label>
          <span class="label">
            <slot/>
          </span>
          <input class="input"
                 type="number"
                 disabled={ this.disabled }
                 required={ this.required }
                 placeholder={ this.placeholder }
                 value={ this.value }
                 onInput={ event => this.handleInput(event) }
          />
        </label>
      </Host>
    );
  }

}
