import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { movieService } from '../movie.service';
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
        "movie": "Partly Cloudy",
        "relative_humidity": "65%"
    }, {
    "display_location":{
       "full": "San Diego, CA"
        },
    "temp_f": 80,
    "movie": "Sunny",
    "relative_humidity": "30%"
    }, {
    "display_location":{
       "full": "Seattle, WA"
        },
    "temp_f": 50,
    "movie": "Rain",
    "relative_humidity": "100%"
    }, {
    "display_location":{
       "full": "Las Vegas, NV"
        },
    "temp_f": 105,
    "movie": "Hot",
    "relative_humidity": "5%"
    }
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent { //what does my component do? 
 
  title = 'Movie App';
  movieData = mockData;
  searchResult: any = [];
  favoriteMovies = []; //an empty array we will add onto with a user click
  movie: string = "";
  
  user: any = {
      email: "example@gmail.com",
      firstName: "Nat",
      lastName: "D",
      password: "merp"
  }
  
    constructor( public movie$: movieService, public user$: UserService ){ }
    //automatically executes
    ngOnInit() {}
    
    
    removeFromFavoriteList(index) {
        console.log(index, "this is index");
        this.favoriteMovies.splice(index,1);
    }
    
    // removeFromFavoriteList(movie, index, array) {
    //  return ( );
    // }
    
    // retval = favoriteMovies.some(removeFromFavoriteList);
   
    //function isBigEnough(element, index, array) { 
//   return (element >= 10); 
//} 
//var retval = [2, 5, 8, 1, 4].some(isBigEnough);
//console.log("Returned value is : " + retval );
    
    addFavoriteMovie(movie) {
        this.favoriteMovies.push(movie);
        console.log("this function fav is working", movie);
    }
    //in this function we are using two-way data binding for the search bar
    movieSearch( searchValue) { 
        console.log("hit", this.movie)
        this.movie$.getmovieData( searchValue )
        .subscribe(
            data => { 
                //creating a variable called data for the response we are getting back
                //here we are assiging the value from our response to the current_observation property. 
                //if you look at the console.log you will see the same property in the data we got back.
                //from there you can use interpolation to display data from the object in the html
                this.searchResult = data.results //adds out data onto the array of the mdcard?
                console.log("response", data)
            }
        )
    }
    
}


