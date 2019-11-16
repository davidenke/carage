import { ComponentInterface, EventEmitter } from '@stencil/core';

export interface FormComponent<T> extends ComponentInterface {

  value: T;

  disabled: boolean;

  required: boolean;

  errored: boolean;

  placeholder: string;

  valueChanged: EventEmitter<T>;

}
