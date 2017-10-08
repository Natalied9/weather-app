import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { WeatherService } from './weather.service';
import { expressService } from './express-service';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  title = ' Weather App';
  weatherData = mockData;
  searchResult: any; 
  favoriteCities = []; //an empty array we will add onto with a user click
  

    constructor( public weather$: WeatherService ){ //
          console.log(this.weather$.foo);
          this.weather$.getWeatherData()
          .subscribe(
              data => {
                  this.searchResult = data
                  console.log("searchResult", this.searchResult);
              }
              )
            console.log(this.weather$.foo)
    }
    addFavoriteCity(city) {
        this.favoriteCities.push(city)
        console.log(this.favoriteCities, city);
    }
    
}


