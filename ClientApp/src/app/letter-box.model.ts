export class LetterBox {

  active: boolean = false;
  letter: string = "";
  value: string = "";
  direction: number = 0; //0 horizontal 1 vertical 2 both
  style: {};
  index: number = -1;

  constructor(Active: boolean, Letter: string, Direction: number) {

    this.active = Active;
    this.letter = Letter;
    this.direction = Direction;
    this.style = {};
  }
}
