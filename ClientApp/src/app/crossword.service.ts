import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clue } from './clue.model';
import { LetterBox } from './letter-box.model';
import { TwlCrossword } from './twl-crossword.model';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrosswordService {


  Crosswords: TwlCrossword[] = [];
  LetterBoxes: LetterBox[][] = [];
  Clues: Clue[] = [];
  CrossWord: TwlCrossword;
  apiURL: string = "";
  constructor(private http: HttpClient) {

    this.apiURL = environment.apiURL;
    this.CrossWord = { id: -1, name:"" };
    for (var i: number = 0; i < 10; i++) { 
    this.LetterBoxes[i] = [];
    for (var j: number = 0; j < 10; j++)
      this.LetterBoxes[i].push(new LetterBox(false, "", 2));
    }

  }

  async postNewCrossword(name: string) {

    let crossWord: TwlCrossword = { id: -1, name: name };
    
    await this.http.post<TwlCrossword>(this.apiURL + "/twlcrosswords/", { 'Name': crossWord.name }).subscribe((response: TwlCrossword) => {
      this.CrossWord = response;
      this.postClues();
    });


  }

  async postClues() {

 
    for (let clue of this.Clues) {
      
      clue.twlCrosswordId = this.CrossWord.id;
      await this.http.post<Clue>(this.apiURL + "/twlClues/", {
        "Answer": clue.answer, "Clue": clue.clue, "Direction": clue.direction,
        "Index": clue.index, "X": clue.x, "Y": clue.y, "TWLCrosswordId": clue.twlCrosswordId
      }).subscribe((response: Clue) => clue = response);

     }

  }

  async getCrosswords() {

    await this.http.get<TwlCrossword[]>(this.apiURL+ "/twlCrosswords/").subscribe(crosswords => {

      this.Crosswords = crosswords;
    })

  }

   getCrossword(id: number): Observable<Clue[]> {

    return   this.http.get<Clue[]>(this.apiURL + "/twlCrosswords/clues/" + id);
  }

}
