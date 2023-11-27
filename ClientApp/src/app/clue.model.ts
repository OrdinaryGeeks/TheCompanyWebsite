export class Clue {

  id: number = -1;
  answer: string = "";
  clue: string = "";
  direction: string = "horizontal"; //0 horizontal 1 vertical
  index: number = 0;
  x: number = 0;
  y: number = 0;
  twlCrosswordId: number = 0;
  constructor(Answer: string, Clue: string, Direction: string) {
    this.answer = Answer;
    this.clue = Clue;
    this.direction = Direction;
    
  }

}
