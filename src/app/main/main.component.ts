import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { WeatherService } from '../weather.service';
import { expressService } from '../express-service';
import { Http } from '@angular/http';
import { UserService } from '../user.service';
import {MdIconModule, MdCardModule} from '@angular/material';

const mockData = [
    {
    "display_location":{
        "full": "San Francisco, CA"
        },
        "temp_f": 66.3,
        "weather": "Partly Cloudy",
        "relative_humidity": "65%"
    }, {
    "display_location":{
       "full": "San Diego, CA"
        },
    "temp_f": 80,
    "weather": "Sunny",
    "relative_humidity": "30%"
    }, {
    "display_location":{
       "full": "Seattle, WA"
        },
    "temp_f": 50,
    "weather": "Rain",
    "relative_humidity": "100%"
    }, {
    "display_location":{
       "full": "Las Vegas, NV"
        },
    "temp_f": 105,
    "weather": "Hot",
    "relative_humidity": "5%"
    }
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent { //what does my component do? 
 
  title = ' Weather App';
  weatherData = mockData;
  searchResult: any = [];
  favoriteCities = []; //an empty array we will add onto with a user click
  city: string = "";
  
  user: any = {
      email: "example@gmail.com",
      firstName: "Nat",
      lastName: "D",
      password: "merp"
  }
  
    constructor( public weather$: WeatherService, public user$: UserService ){ 
        //   console.log(this.weather$.foo);
        //   this.weather$.getWeatherData( this.city )
        //   .subscribe(
        //       data => {
        //           this.searchResult = data.response.results
        //           console.log("searchResult", this.searchResult);
        //       }
        //       )
        //     console.log(this.weather$.foo)
    }
    //automatically executes
    ngOnInit() {}
    
    iterate(city) { //trying to display the search input to a md card on the right column
        for (var citysel in this.favoriteCities) {
            if (citysel == this.city) {  
                console.log("city exists");
        }
    }
    }
    addFavoriteCity(city) {
        this.favoriteCities.push(city);
        this.iterate(city)
        console.log(this.favoriteCities, city);
    }
    //in this function we are using two-way data binding for the search bar
    citySearch( searchValue) { 
        console.log("hit", this.city)
        this.weather$.getWeatherData( searchValue )
        .subscribe(
            data => { 
                //creating a variable called data for the response we are getting back
                //here we are assiging the value from our response to the current_observation property. 
                //if you look at the console.log you will see the same property in the data we got back.
                //from there you can use interpolation to display data from the object in the html
                this.searchResult.push( data.current_observation) //adds out data onto the array of the mdcard?
                console.log("response", data)
            }
        )
    }
    
}


