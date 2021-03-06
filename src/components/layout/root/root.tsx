import { Component, ComponentInterface, h, Host, State } from '@stencil/core';
import { CarModel } from '../../../models/car.model';
import { all, generateGuid, prefixKey } from '../../../utils/storage.utils';

@Component({
  tag: 'carage-root',
  styleUrl: 'root.scss',
  shadow: true
})
export class Root implements ComponentInterface {

  private readonly newCar = new CarModel(prefixKey(generateGuid()), {
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQAQMAAABI+4zbAAAABlBMVEXMzMzMzMy+G0qZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACwElEQVR4nO2XMY6cMBSGH0IamhGTkgJpr0A6ipX2KnMEpEjJFJHCTXKNlD4KR5hyi2iJn20YPBtpbTJSmu8rfmkH/AHmrf0QAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD475TzJPL0JiFuFEbkNEuIJE7zq8iPeQyxuYh1vcxLJPEsjci1nELErktxDZHEIO5xrj42VNY1ySVEEnov5WhPd7HhZFT/7CMJnWGpRHofG45G9a2PJOyZIrXY011saIzqax9JVO4W9PTj3ZjOyEGPH8JJH3PQaFXT3rkGo39XPpJwwxt1NkG8cDZ6q6WPJI4avV66v7u+MXqr5diGSf2YNrhKHzcK7ypGF0muRqNTTRe7ytHowWJs8l1j55/lkx3qXOJdpglFmOgaVDN4Vx+m52BdvWr6ZFcfXMU4+GdpwyuovUuMiyRXd++qQ50cd7h0pTur5uxdVXi3jRXohUyX7nr5OUUuO1nuufsdrqtdtbYuO8+6pNnIdn3WWVGNOYf3Nbklzf7mXZOLJNcXXZ0i1+ArwOS7vulri1y9K69ih+urvrnI1bryslOX7fr+zlW78iol33XRKohclSuvw0Nc5S/9vd7nKmKX31mPO1zDWqbnZZ1yAxvJr9VhuaXV5e+rf4irfNXfu72u7ZoT3uNZdq1fdy5fX+YfXOsa7eu+cI1J5hrtXNu9w/8/FrNlytw79KpjtKe5deLmytjTnCvaa6elMvfsteW47QGWdTW4MnuActz2Jst6r67M3kRdUc9UrS3dnp6pinq5em3Dsns5N3TbY7br0D09Zh31vv061Xt632eNwYcv3sXlSt/XfwqFfgn89VtB/wkzvxVerc1+vpgQseuiB10kET6fxhCx62leIomTfumdfi8Ruyo9WL29HwUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+EP2PcMvgHU5x0AAAAASUVORK5CYII=',
    registrationDate: new Date()
  });

  @State()
  isCreating = false;

  @State()
  cars: CarModel[] = [];

  openCreator() {
    this.isCreating = true;
  }

  closeCreator() {
    this.isCreating = false;
  }

  loadAll() {
    this.cars = all()
      .reverse()
      .map(([id, data]) => new CarModel(id, JSON.parse(data)));
  }

  save(model: CarModel) {
    model.save();
    this.loadAll();
    this.closeCreator();
  }

  // mockedCars: CarModel[] = [
  //   new CarModel({
  //     manufacturer: 'SAAB',
  //     model: '900i',
  //     registrationDate: new Date(1989, 7, 2),
  //     licensePlate: 'DD-OG 900H',
  //     designType: 'Fließheck (FLH)',
  //     powerKW: 81,
  //     capacity: 1985,
  //     vin: 'YS3AB55J9J7027440',
  //     manufacturerKey: '9107',
  //     modelCode: '321'
  //   }),
  //   new CarModel({
  //     manufacturer: 'BMW',
  //     model: '525iA Touring',
  //     registrationDate: new Date(2005, 8, 27),
  //     licensePlate: 'DD-ZD 9137',
  //     designType: 'Kombi (NL51)',
  //     powerKW: 160,
  //     capacity: 2497,
  //     vin: 'WBANL51050CN07688',
  //     manufacturerKey: '0005',
  //     modelCode: '839'
  //   })
  // ];

  componentWillLoad() {
    // load all stored cars
    this.loadAll();

    // show creator if nothing is present
    if (this.cars.length < 1) {
      this.openCreator();
    }
  }

  render() {
    return (
      <Host class={ { 'is-creating': this.isCreating } }>
        <carage-editor class="creator"
                       model={ this.newCar }
                       onClose={ () => this.closeCreator() }
                       onSave={ ({ detail }) => this.save(detail as CarModel) }
        />
        <carage-cars class="cars">
          { this.cars.map(car => (
            <carage-car model={ car }/>
          )) }
        </carage-cars>

        <carage-button class="create"
                       onClick={ () => this.openCreator() }
        >
          create
        </carage-button>
      </Host>
    );
  }

}
