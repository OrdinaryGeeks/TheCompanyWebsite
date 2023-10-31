import { Joke } from "./joke.model";

export class JokeResponse {

  error: boolean;
  amount: number;
  jokes: Joke[];

  constructor(Error: boolean, Amount: number, Jokes: Joke[]) {
    this.error = Error;
    this.amount = Amount;
    this.jokes = Jokes;
  }
}
