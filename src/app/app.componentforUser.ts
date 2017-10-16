import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { movieService } from './movie.service';
import { expressService } from './express-service';
import { Http } from '@angular/http';
import { UserService } from './user.service';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponentUsers {
 
  title = ' movie App';
  movieData = mockData;
  searchResult: any; 
  favoriteMovies = []; //an empty array we will add onto with a user click
  movie: string = "";
  
  user: any = {
      email: "example@gmail.com",
      firstName: "Nat",
      lastName: "D",
      password: "merp"
  }
  
  constructor(public user$: UserService, public movie$: movieService ){ //
      
  }
  
  ngOnInit() //automatically executes
  {
      this.user$.register(this.user)
      .subscribe( res => console.log("res", res) )
  }
  
  searchin() {
          //console.log(this.movie$.foo);
          this.movie$.getmovieData( this.movie )
          .subscribe(
              data => {
                  this.searchResult = data.response.results
                  console.log("searchResult", this.searchResult);
              }
              )
            //console.log(this.movie$.foo)
    }
    addFavoriteMovie(movie) {
        this.favoriteMovies.push(movie)
        //console.log(this.favoriteMovies, movie);
    }
    //in this function we are using two-way data binding for the search bar
    movieSearch( searchValue) { 
        //console.log("hit", this.movie)
        this.movie$.getmovieData( searchValue )
        .subscribe(
            data => { //creating a variable called data for the response we are getting back
                //here we are assiging the value from our response to the current_observation property. 
                //if you look at the console.log you will see the same property in the data we got back.
                //from there you can use interpolation to display data from the object in the html
                this.searchResult = data.current_observation
                //console.log("response", data)
            }
        )
    }
    
}


