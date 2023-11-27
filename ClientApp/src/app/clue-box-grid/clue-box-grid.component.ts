import { Component, OnInit } from '@angular/core';
import { Clue } from '../clue.model';
import { CrosswordService } from '../crossword.service';
import { LetterBox } from '../letter-box.model';
import { TwlCrossword } from '../twl-crossword.model';

@Component({
  selector: 'app-clue-box-grid',
  templateUrl: './clue-box-grid.component.html',
  styleUrls: ['./clue-box-grid.component.css']
})

  
export class ClueBoxGridComponent implements OnInit {

  index: number = 1;
  LetterBoxes: LetterBox[][] = [];
  Clues: Clue[] = [];
  x: number = 0;
  y: number = 0;
  oldValue: string = "";
  Crosswords: TwlCrossword[] = [];

  crosswordSelected: TwlCrossword = {name:"", id:0 }
  
  constructor(private crossword: CrosswordService) {

    crossword.getCrosswords();

    this.Crosswords = crossword.Crosswords;


   
  }

  setupLetterBoxes() {
    for (var i: number = 0; i < 10; i++) {
      this.LetterBoxes[i] = [];
      for (var j: number = 0; j < 10; j++)
        this.LetterBoxes[i].push(new LetterBox(false, "", 2));
    }
    this.Clues = this.crossword.Clues;

    for (let clue of this.Clues) {

      this.LetterBoxes[clue.x][clue.y].index = clue.index;
      this.LetterBoxes[clue.x][clue.y].active = true;
      let urlImage = "";
      if (clue.direction == "horizontal") {
        for (let x = 0; x < clue.answer.length; x++) {

          if (x == 0) {

            if (clue.index == 1)
              urlImage = 'url("assets/1.bmp")';
            if (clue.index == 2)
              urlImage = 'url("assets/2.bmp")';
            if (clue.index == 3)
              urlImage = 'url("assets/3.bmp")';
            if (clue.index == 4)
              urlImage = 'url("assets/4.bmp")';
            if (clue.index == 5)
              urlImage = 'url("assets/5.bmp")';
            if (clue.index == 6)
              urlImage = 'url("assets/6.bmp")';
            if (clue.index == 7)
              urlImage = 'url("assets/7.bmp")';
            if (clue.index == 8)
              urlImage = 'url("assets/8.bmp")';
            if (clue.index == 9)
              urlImage = 'url("assets/9.bmp")';
            if (clue.index == 10)
              urlImage = 'url("assets/10.bmp")';
            if (clue.index == 11)
              urlImage = 'url("assets/11.bmp")';
            if (clue.index == 12)
              urlImage = 'url("assets/12.bmp")';
            if (clue.index == 13)
              urlImage = 'url("assets/13.bmp")';
            if (clue.index == 14)
              urlImage = 'url("assets/14.bmp")';
            if (clue.index == 15)
              urlImage = 'url("assets/15.bmp")';
            if (clue.index == 16)
              urlImage = 'url("assets/16.bmp")';
            if (clue.index == 17)
              urlImage = 'url("assets/17.bmp")';
            if (clue.index == 18)
              urlImage = 'url("assets/18.bmp")';
            if (clue.index == 19)
              urlImage = 'url("assets/19.bmp")';
            if (clue.index == 20)
              urlImage = 'url("assets/20.bmp")';
            this.LetterBoxes[clue.x][clue.y].style = {
              'background-color': 'white', 'background-image': urlImage, 'min-height': '100%',
              'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
            };

          }
          this.LetterBoxes[clue.x][clue.y + x].active = true;
          this.LetterBoxes[clue.x][clue.y + x].value = clue.answer[x];
        }
      }
      if (clue.direction == "vertical") {
        for (let y = 0; y < clue.answer.length; y++) {
          this.LetterBoxes[clue.x + y][clue.y].active = true;
          this.LetterBoxes[clue.x + y][clue.y].value = clue.answer[y];
        }

      }

    }

    this.LetterBoxes = [...this.LetterBoxes];
  }

  CheckAnswers() {

    for (let x = 0; x < this.LetterBoxes.length; x++)
      for (let y = 0; y < this.LetterBoxes[x].length; y++) {

        if (this.LetterBoxes[x][y].active) {
          if (this.LetterBoxes[x][y].letter == this.LetterBoxes[x][y].value) {

            this.LetterBoxes[x][y].style = { 'background-color': 'blue' };
          }
          else {
            this.LetterBoxes[x][y].style = { 'background-color': 'red' };
          }

        }
      }
  }
  crosswordSelection() {


    
    this.crossword.getCrossword(this.crosswordSelected.id).subscribe((response: Clue[]) => {

      this.Clues = response;
      this.crossword.Clues = response;
    

     

      this.setupLetterBoxes();
    });

  }

  letterEntered(newValue: any, x:number,  y:number) {


    if (newValue.target.value.length == 0)
      this.LetterBoxes[x][y].letter = "";
    else if (this.LetterBoxes[x][y].letter == "")
      this.LetterBoxes[x][y].letter = newValue.target.value;
    else {

      let wordToChange = newValue.target.value;
      for (let increment : number = 0; increment < this.LetterBoxes[x][y].letter.length; increment++) {
        wordToChange = wordToChange.replace(this.LetterBoxes[x][y].letter[increment], "");




      }

      this.LetterBoxes[x][y].letter = wordToChange;
    }
    this.LetterBoxes = [...this.LetterBoxes];
    

  }

  ngOnInit(): void {
  }

}
