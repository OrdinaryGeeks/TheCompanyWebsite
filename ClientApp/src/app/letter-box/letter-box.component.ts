import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-box',
  templateUrl: './letter-box.component.html',
  styleUrls: ['./letter-box.component.css']
})
export class LetterBoxComponent implements OnInit {

  constructor() { }

  active: boolean = true;
  ngOnInit(): void {
  }


  letterEntered(event:any) {

    alert(event.target.value)


  }
}
