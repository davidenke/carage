import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';
import { Model, PropertyMetadata } from '../../../utils/model.utils';

@Component({
  tag: 'carage-editor',
  styleUrl: 'editor.scss',
  shadow: true
})
export class Editor implements ComponentInterface {

  @Prop({ mutable: true })
  model: Model;

  @Event()
  close: EventEmitter<void>;

  @Event()
  save: EventEmitter<Model>;

  update(property: string, value) {
    this.model[property] = value;
  }

  renderInput(property: string, { type, label, required }: PropertyMetadata) {
    const Input = `carage-edit-${ type }`;
    return (
      <Input class="input"
             required={ required }
             value={ this.model[property] }
             onValueChanged={ ({ detail }) => this.update(property, detail) }
      >
        { label || property }
      </Input>
    );
  }

  renderInputs(model: Model) {
    const metadata = model.getMetadata();
    const entries = Array.from(metadata.entries());
    return entries.map(([property, type]) => this.renderInput(property, type));
  }

  render() {
    return (
      <carage-card class="card"
                   closable={ true }
                   onClose={ () => this.close.emit() }
      >
        <form>
          { this.renderInputs(this.model) }
          <carage-button class="submit"
                         expand={ true }
                         onClick={ () => this.save.emit(this.model) }
          >
            save
          </carage-button>
        </form>
      </carage-card>
    );
  }

}
