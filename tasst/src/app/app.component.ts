import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Id: string = '';
  name: string = '';
  City: string = '';
  Coach: string = '';

  gender: boolean = true;
  customers: any[] = [];

  addCustomer() {
    // Push the customer object into the 'customers' array
    this.customers.push({ x: this.Id, y: this.name, z: this.City, g: this.Coach });

    // Log the customers array to the console
    console.log(this.customers);

    // Reset the input fields
    this.name = '';
    this.Id = '';
    this.City = '';
    this.Coach = '';
  }
}
