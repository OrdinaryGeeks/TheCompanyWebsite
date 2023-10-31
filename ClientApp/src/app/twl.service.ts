import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdviceResponse } from './advice-response.model';
import { JokeResponse } from './joke-response.model';
import { Joke } from './joke.model';

@Injectable({
  providedIn: 'root'
})
export class TWLService {

  jokeResponse: JokeResponse;
  jokes: Joke[];
  constructor(private http: HttpClient) {

    this.jokeResponse = new JokeResponse(false, 0, []);
    this.jokes = [];
    this.http.get<JokeResponse>("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10").subscribe(
      result => { this.jokeResponse = result; this.jokes = this.jokeResponse.jokes }
      )

  }

  getJokes() {

    return this.http.get<JokeResponse>("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10");
  }

  getAdvice() {

    return this.http.get<AdviceResponse>("https://api.adviceslip.com/advice");
  }

}
