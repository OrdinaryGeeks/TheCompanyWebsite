import { Component, OnInit } from '@angular/core';
import { JokeResponse } from '../joke-response.model';
import { Joke } from '../joke.model';
import { TWLService } from '../twl.service';

@Component({
  selector: 'app-levity',
  templateUrl: './levity.component.html',
  styleUrls: ['./levity.component.css']
})
export class LevityComponent implements OnInit {

  jokes: Joke[];

  index: number = 0;


  constructor(private twlService: TWLService) {

    this.jokes = [];

    this.twlService.getJokes().subscribe(result => { this.jokes = result.jokes });


  }

  nextJoke() {

    this.index++;
    if (this.index == 9)
      this.index = 0; 
  }

  ngOnInit(): void {
  }

}
