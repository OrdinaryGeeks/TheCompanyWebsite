export class Joke {

  category: string;
  type: string;
  setup: string;
  delivery: string;
  flags: boolean[];
  id: number;
  safe: boolean;
  lang: string;
  joke: string;
  constructor(Joke:string, Category: string, Type: string, Setup: string, Delivery: string, Flags: boolean[], Id: number, Safe: boolean, Lang: string) {

    this.joke = Joke;
    this.category = Category;
    this.type = Type;
    this.delivery = Delivery;
    this.setup = Setup;
    this.flags = Flags;
    this.id = Id;
    this.safe = Safe;
    this.lang = Lang;
  }
}
