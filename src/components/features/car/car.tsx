import { Component, ComponentInterface, h, Prop, State } from '@stencil/core';
import { CarModel } from '../../../models/car.model';
import { formatDate } from '../../../utils/date.utils';

@Component({
  tag: 'carage-car',
  styleUrl: 'car.scss',
  shadow: true
})
export class Car implements ComponentInterface {

  @Prop()
  model: CarModel;

  @State()
  isEditing = false;

  openEditor() {
    this.isEditing = true;
  }

  closeEditor() {
    this.isEditing = false;
  }

  save(model: CarModel) {
    this.model = model;
    this.model.save();
    this.closeEditor();
  }

  render() {
    return (
      <article class={ { 'is-editing': this.isEditing } }>
        <img src={ this.model.image }
             alt={ this.model.name }
        />

        <carage-card class="details">
          <h2>{ this.model.licensePlate }</h2>
          <h1>{ this.model.name }</h1>

          <dl>
            <dt>identification</dt>
            <dd>{ this.model.vin }</dd>

            <dt>key code</dt>
            <dd>{ this.model.keyCode }</dd>

            <dt>registration date</dt>
            <dd>{ formatDate(this.model.registrationDate) }</dd>

            <dt>power</dt>
            <dd>{ this.model.powerKW }kW ({ this.model.powerPS }PS)</dd>
          </dl>
        </carage-card>

        <carage-button class="edit"
                       onClick={ () => this.openEditor() }
        >
          edit
        </carage-button>

        <carage-editor class="editor"
                       model={ this.model.clone() }
                       onClose={ () => this.closeEditor() }
                       onSave={ ({ detail }) => this.save(detail as CarModel) }
        />
      </article>
    );
  }

}
