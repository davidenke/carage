import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { formatDateInput } from '../../../utils/date.utils';
import { FormComponent } from '../../../interfaces/form-component.interface';

@Component({
  tag: 'carage-edit-date',
  styleUrl: 'edit-date.scss',
  shadow: true
})
export class EditDate implements FormComponent<Date> {

  @Prop({ reflectToAttr: true })
  value: Date;

  @Prop({ reflectToAttr: true })
  disabled = false;

  @Prop({ reflectToAttr: true })
  required = false;

  @Prop({ reflectToAttr: true })
  errored = false;

  @Prop({ reflectToAttr: true })
  placeholder = '';

  @Event()
  valueChanged!: EventEmitter<Date>;

  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.valueChanged.emit(new Date(value));
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
                 type="date"
                 disabled={ this.disabled }
                 required={ this.required }
                 placeholder={ this.placeholder }
                 value={ formatDateInput(this.value) }
                 onInput={ event => this.handleInput(event) }
          />
        </label>
      </Host>
    );
  }

}
