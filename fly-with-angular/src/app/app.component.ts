import { Component } from '@angular/core';
import {Trip} from './Models/trip' 
import {TripMoney} from './Models/trip' 
import {FormGroup,FormBuilder,FormControl} from '@angular/forms'
import { Validators } from '@angular/forms';
import { fail } from 'assert';
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
      description:"this is the description",
      imageUrl:"https://www.w3schools.com/angular/pic_angular.jpg",
      state:true
    },
    { 
      name:"my-trip",
      price:1200,
      duration:"1200 years",
      description:"this is the description",
      imageUrl:"https://www.w3schools.com/angular/pic_angular.jpg",
      state:true
    },
    { 
      name:"my-trip",
      price:1200,
      duration:"1200 years",
      description:"this is the description",
      imageUrl:"https://www.w3schools.com/angular/pic_angular.jpg",
      state:true
    },
  ]
 
  ngOnInit() {
    
  }

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }
  tripform:FormGroup;
  createForm() {
    this.tripform = this.fb.group({
      name: new FormControl('',Validators.required),
      price:new FormControl(0, Validators.required),
      duration:new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      imageUrl: new FormControl('',Validators.required)
    });
  }

  submitForm(){
    this.trips.push(this.tripform.value);
    this.isListVisible= !this.isListVisible;
  }

  isListVisible=true;
    showList(){
      this.isListVisible= !this.isListVisible;
  }


totalMoney=50000;
remainingMoney=50000;
isBooked = true;
showBooked(trip){
  trip.state= !trip.state;
  console.log(trip);
  if(trip.state==false){
  this.totalMoney= this.totalMoney+trip.price;
  this.remainingMoney= this.remainingMoney-trip.price;
  }
  else{
    this.totalMoney= this.totalMoney-trip.price;
    this.remainingMoney= this.remainingMoney+trip.price;
  }
//   tripmoney:Array<TripMoney>=
//   [
// {
//   amount:trip..
// }

//   }
// }
 

  

  // TripName="Trip-name";
  // TripTime="Trip-time";
  // TripDesc="Trip-desc";
  // TripPrice="Trip-price";

}
