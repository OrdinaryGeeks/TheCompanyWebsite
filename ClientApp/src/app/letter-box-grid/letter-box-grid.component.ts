import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Clue } from '../clue.model';
import { CrosswordService } from '../crossword.service';
import { LetterBox } from '../letter-box.model';
@Component({
  selector: 'app-letter-box-grid',
  templateUrl: './letter-box-grid.component.html',
  styleUrls: ['./letter-box-grid.component.css']
})
export class LetterBoxGridComponent implements OnInit {


  index: number = 1;
  LetterBoxes: LetterBox[][] = [];
  Clues: Clue[] = [];
  x: number = 0;
  y: number = 0;
  constructor(private crossword: CrosswordService) {


    this.LetterBoxes = crossword.LetterBoxes;

  }

  ngOnInit(): void {


  }

  setClueIndices(i: number, j: number) {
    
    this.x = i;
    this.y = j;
  }

  CheckClueValidity(answer: string, clueOrientation: string) {

    let validAnswer: boolean = true;
    if (clueOrientation == "vertical") //vertical
    {
      if (this.x + answer.length < this.LetterBoxes.length) {
        for (let b: number = 0; b < answer.length; b++) {
          if (!this.LetterBoxes[this.x + b][this.y].active) {
           

          }
          else if (this.LetterBoxes[this.x + b][this.y].letter.toLowerCase() == answer[b].toLowerCase()) {
            continue;
          }
          else {
            validAnswer = false;
            break;
          }
        }

      }
      else {
        alert("Clue to long");
        validAnswer = false;
      }
    }

    if (clueOrientation == "horizontal") //horizontal
    {
      if (this.y + answer.length < this.LetterBoxes.length) {
        for (let b: number = 0; b < answer.length; b++) {
          if (!this.LetterBoxes[this.x][this.y + b].active) {


          }
          else if (this.LetterBoxes[this.x][this.y + b].letter.toLowerCase() == answer[b].toLowerCase()) {
            continue;
          }
          else {
            validAnswer = false;
            break;
          }
        }

      }
      else {
        alert("Clue to long");
        validAnswer = false;
      }
    }

    return validAnswer;



  }
  AddClueToLetterBoxGrid(clue: Clue, orientation: string) {

   
    this.LetterBoxes = [ ...this.LetterBoxes ];
    if (orientation == "vertical") //vertical
    {
      for (let b: number = 0; b < clue.answer.length; b++) {
          this.LetterBoxes[this.x + b][this.y].active = true;
        this.LetterBoxes[this.x + b][this.y].letter = clue.answer[b];
        this.LetterBoxes[this.x][this.y].style = { 'background-color': 'white' };
        if(b==0)
        this.LetterBoxes[this.x][this.y].index = clue.index;

        
      }
    }


    if (orientation == "horizontal") //horizontal
    {

      for (let b: number = 0; b < clue.answer.length; b++) {
        this.LetterBoxes[this.x][this.y + b].active = true;
        this.LetterBoxes[this.x][this.y + b].letter = clue.answer[b];
        this.LetterBoxes[this.x][this.y].style = { 'background-color': 'white' };
        if(b == 0)
        this.LetterBoxes[this.x][this.y].index = clue.index;
      }
    }
    
    
  }


  AddClue(clueForm: NgForm) {

    const clue = clueForm.controls["clue"].value;
    const answer = clueForm.controls["answer"].value;
    const orientation = clueForm.controls["clueOrientation"].value;

    if (this.CheckClueValidity(answer, orientation)) {

      
      const newClue: Clue = (new Clue(answer, clue, orientation));
      newClue.x = this.x;
      newClue.y = this.y;

      if (this.LetterBoxes[this.x][this.y].active && this.LetterBoxes[this.x][this.y].index != -1) {
        newClue.index = this.LetterBoxes[this.x][this.y].index;
    
        
       
      }
      else {

      
        newClue.index = this.index++;
        
       
      }

      this.AddClueToLetterBoxGrid(newClue, orientation);
        
        if (newClue.index == 1)
        this.LetterBoxes[this.x][this.y].style = { 'background-color': 'white', 'background-image': 'url("assets/1.bmp")', 'min-height': '100%',
         'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat' };
        if (newClue.index == 2)
          this.LetterBoxes[this.x][this.y].style = { 'background-color': 'white', 'background-image': 'url("assets/2.bmp")', 'min-height': '100%',
         'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat' };
        if (newClue.index == 3)
          this.LetterBoxes[this.x][this.y].style = {
            'background-color': 'white', 'background-image': 'url("assets/3.bmp")', 'min-height': '100%',
            'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
          };
        if (newClue.index == 4)
          this.LetterBoxes[this.x][this.y].style = {
            'background-color': 'white', 'background-image': 'url("assets/4.bmp")', 'min-height': '100%',
            'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
          };
        if (newClue.index == 5)
          this.LetterBoxes[this.x][this.y].style = {
            'background-color': 'white', 'background-image': 'url("assets/5.bmp")', 'min-height': '100%',
            'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
          };
        if (newClue.index == 6)
          this.LetterBoxes[this.x][this.y].style = {
            'background-color': 'white', 'background-image': 'url("assets/6.bmp")', 'min-height': '100%',
            'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
          };
        if (newClue.index == 7)
          this.LetterBoxes[this.x][this.y].style = {
            'background-color': 'white', 'background-image': 'url("assets/7.bmp")', 'min-height': '100%',
            'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
          };
        if (newClue.index == 8)
          this.LetterBoxes[this.x][this.y].style = {
            'background-color': 'white', 'background-image': 'url("assets/8.bmp")', 'min-height': '100%',
            'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
          };
        if (newClue.index == 9)
          this.LetterBoxes[this.x][this.y].style = {
            'background-color': 'white', 'background-image': 'url("assets/9.bmp")', 'min-height': '100%',
            'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
          };
        if (newClue.index == 10)
          this.LetterBoxes[this.x][this.y].style = {
            'background-color': 'white', 'background-image': 'url("assets/10.bmp")', 'min-height': '100%',
            'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
        };
      if (newClue.index == 11)
        this.LetterBoxes[this.x][this.y].style = {
          'background-color': 'white', 'background-image': 'url("assets/11.bmp")', 'min-height': '100%',
          'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
        };
      if (newClue.index == 12)
        this.LetterBoxes[this.x][this.y].style = {
          'background-color': 'white', 'background-image': 'url("assets/12.bmp")', 'min-height': '100%',
          'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
        };
      if (newClue.index == 13)
        this.LetterBoxes[this.x][this.y].style = {
          'background-color': 'white', 'background-image': 'url("assets/13.bmp")', 'min-height': '100%',
          'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
        };
      if (newClue.index == 14)
        this.LetterBoxes[this.x][this.y].style = {
          'background-color': 'white', 'background-image': 'url("assets/14.bmp")', 'min-height': '100%',
          'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
        };
      if (newClue.index == 15)
        this.LetterBoxes[this.x][this.y].style = {
          'background-color': 'white', 'background-image': 'url("assets/15.bmp")', 'min-height': '100%',
          'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
        };
      if (newClue.index == 16)
        this.LetterBoxes[this.x][this.y].style = {
          'background-color': 'white', 'background-image': 'url("assets/16.bmp")', 'min-height': '100%',
          'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
        };
      if (newClue.index == 17)
        this.LetterBoxes[this.x][this.y].style = {
          'background-color': 'white', 'background-image': 'url("assets/17.bmp")', 'min-height': '100%',
          'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
        };
      if (newClue.index == 18)
        this.LetterBoxes[this.x][this.y].style = {
          'background-color': 'white', 'background-image': 'url("assets/18.bmp")', 'min-height': '100%',
          'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
        };
      if (newClue.index == 19)
        this.LetterBoxes[this.x][this.y].style = {
          'background-color': 'white', 'background-image': 'url("assets/19.bmp")', 'min-height': '100%',
          'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
        };
      if (newClue.index == 20)
        this.LetterBoxes[this.x][this.y].style = {
          'background-color': 'white', 'background-image': 'url("assets/20.bmp")', 'min-height': '100%',
          'height': '100%', 'background-size': 'cover', 'background-position': 'center top', 'background-repeat': 'no-repeat'
        };
      

      this.Clues = [...this.Clues];
      this.Clues.push(newClue);
      
    

    }

 
  }

  UpdateClues() {
    this.crossword.Clues = [...this.Clues];
  }

  PostCrossWord(crosswordNameForm: NgForm) {

    
    this.crossword.postNewCrossword(crosswordNameForm.value["crosswordName"]);




  }

  

}
