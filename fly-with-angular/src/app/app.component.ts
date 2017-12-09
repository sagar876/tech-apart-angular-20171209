import { Component } from '@angular/core';
import {Trip} from './Models/trip' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  trips: Array<Trip> =
  [
     { 
      name:"my-trip",
      price:1200,
      duration:"1200 years",
      description:"this is the description"
    },
    { 
      name:"my-trip",
      price:1200,
      duration:"1200 years",
      description:"this is the description"
    },
    { 
      name:"my-trip",
      price:1200,
      duration:"1200 years",
      description:"this is the description"
    },
  ]
 
  isListVisible=true;
    showList(){
      this.isListVisible= !this.isListVisible;
  }

  // TripName="Trip-name";
  // TripTime="Trip-time";
  // TripDesc="Trip-desc";
  // TripPrice="Trip-price";

}
