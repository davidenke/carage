type Primitive = null | boolean | number | string;
type MappedPropertyType<T extends PropertyType, R =
  T extends 'text' ? string :
    T extends 'number' ? number :
      T extends 'date' ? Date :
        T extends 'image' ? string :
          never> = R;
export type PropertyType = 'text' | 'number' | 'date' | 'image';
export type PropertyMetadata<T extends PropertyType = PropertyType> = {
  type: T;
  label: string;
  required: boolean;
  serialize: (value: MappedPropertyType<T>) => Primitive;
  parse: (value: Primitive) => MappedPropertyType<T>;
};
export type ModelMetadata = Map<string, PropertyMetadata>;

const propertyTypes = new Map<string, ModelMetadata>();
const setPropertyType = <T extends PropertyType>(namespace: string, property: string, metadata: PropertyMetadata<T>) => {
  // prepare namespace if necessary
  if (!propertyTypes.has(namespace)) {
    propertyTypes.set(namespace, new Map());
  }
  // set the property type
  propertyTypes
    .get(namespace)
    .set(property, metadata);
};

export abstract class Model<T = any> {

  constructor(readonly id: string, data: Partial<T>) {
    this.setData(data);
  }

  abstract save(): void;

  setData(data: Partial<T>) {
    const metadata = this.getMetadata();
    Object
      .keys(data)
      .forEach(property => {
        this[property] = metadata
          .get(property)
          .parse(data[property]);
      });
  }

  getMetadata(): ModelMetadata {
    return propertyTypes.get(this.constructor.name);
  }

  clone(): T {
    return new (<any>this.constructor)(this.id, this.serialize());
  }

  serialize() {
    const metadata = this.getMetadata();
    return Array
      .from(metadata.keys())
      .reduce((data, property) => {
        data[property] = metadata.get(property)
          .serialize(this[property]);
        return data;
      }, {} as this);
  }

  toJSON() {
    return this.serialize();
  }

}

type TypeDecorator = (options?: Partial<{ label: string; required: boolean; }>) => PropertyDecorator;

export const TextType: TypeDecorator = ({ label, required } = {}) => ({ constructor }, propertyKey) => {
  const parse = (value: string) => value;
  const serialize = (value: string) => value;
  setPropertyType(constructor.name, propertyKey.toString(), { type: 'text', label, required, parse, serialize });
};

export const NumberType: TypeDecorator = ({ label, required } = {}) => ({ constructor }, propertyKey) => {
  const parse = (value: number) => value;
  const serialize = (value: number) => value;
  setPropertyType(constructor.name, propertyKey.toString(), { type: 'number', label, required, parse, serialize });
};

export const DateType: TypeDecorator = ({ label, required } = {}) => ({ constructor }, propertyKey) => {
  const parse = (value: string) => new Date(value);
  const serialize = (value: Date) => value.toISOString();
  setPropertyType(constructor.name, propertyKey.toString(), { type: 'date', label, required, parse, serialize });
};

export const ImageType: TypeDecorator = ({ label, required } = {}) => ({ constructor }, propertyKey) => {
  const parse = (value: string) => value;
  const serialize = (value: string) => value;
  setPropertyType(constructor.name, propertyKey.toString(), { type: 'image', label, required, parse, serialize });
};
