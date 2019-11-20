import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { FormComponent } from '../../../interfaces/form-component.interface';

@Component({
  tag: 'carage-edit-text',
  styleUrl: 'edit-text.scss',
  shadow: true
})
export class EditText implements FormComponent<string> {

  @Prop({ reflectToAttr: true })
  value: string;

  @Prop({ reflectToAttr: true })
  multiline = false;

  @Prop({ reflectToAttr: true })
  disabled = false;

  @Prop({ reflectToAttr: true })
  required = false;

  @Prop({ reflectToAttr: true })
  errored = false;

  @Prop({ reflectToAttr: true })
  placeholder = '';

  @Event()
  valueChanged!: EventEmitter<string>;

  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.valueChanged.emit(value);
  }

  render() {
    return (
      <Host class={ {
        multiline: this.multiline,
        disabled: this.disabled,
        errored: this.errored,
        required: this.required
      } }
      >
        <label>
          <span class="label">
            <slot/>
          </span>
          { this.multiline ? (
            <textarea class="input"
                      disabled={ this.disabled }
                      required={ this.required }
                      placeholder={ this.placeholder }
                      onInput={ event => this.handleInput(event) }
            >
              { this.value }
            </textarea>
          ) : (
            <input class="input"
                   type="text"
                   disabled={ this.disabled }
                   required={ this.required }
                   placeholder={ this.placeholder }
                   value={ this.value }
                   onInput={ event => this.handleInput(event) }
            />
          ) }
        </label>
      </Host>
    );
  }

}
