import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { FormComponent } from '../../../interfaces/form-component.interface';

@Component({
  tag: 'carage-edit-image',
  styleUrl: 'edit-image.scss',
  shadow: true
})
export class EditImage implements FormComponent<string> {

  @Prop({ reflectToAttr: true, mutable: true })
  value: string;

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
    const { files } = event.target as HTMLInputElement;
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.value = reader.result.toString();
      this.valueChanged.emit(this.value);
    }, false);

    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }
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
                 type="file"
                 accept="image/*"
                 disabled={ this.disabled }
                 required={ this.required }
                 placeholder={ this.placeholder }
                 onChange={ event => this.handleInput(event) }
          />
        </label>
        <img src={ this.value }
             alt=""
        />
      </Host>
    );
  }

}
