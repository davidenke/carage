import { DateType, ImageType, Model, NumberType, TextType } from '../utils/model.utils';
import { load, save } from '../utils/storage.utils';

export class CarModel extends Model<CarModel> {

  static load(id: string): CarModel {
    return new CarModel(id, JSON.parse(load(id)));
  }

  static save(car: CarModel) {
    save(car.id, JSON.stringify(car));
  }

  @ImageType()
  image: string;

  @TextType({ required: true })
  manufacturer: string;

  @TextType({ required: true })
  model: string;

  @DateType({ label: 'registration date' })
  registrationDate: Date;

  @TextType({ label: 'license plate' })
  licensePlate: string;

  @TextType({ label: 'design type' })
  designType: string;

  @NumberType({ label: 'power in kilowatts' })
  powerKW: number;

  @NumberType()
  capacity: number;

  @TextType({ required: true })
  vin: string;

  @TextType({ label: 'manufacturer key' })
  manufacturerKey: string;

  @TextType({ label: 'model code' })
  modelCode: string;

  get name(): string {
    return `${ this.manufacturer } ${ this.model }`;
  }

  get powerPS(): number {
    return Math.round(this.powerKW * 1.35962);
  }

  get keyCode(): string {
    return `${ this.manufacturerKey }/${ this.modelCode }`;
  }

  save() {
    CarModel.save(this);
  }

}
