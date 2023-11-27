import { Component, OnInit } from '@angular/core';
import { AdviceResponse } from '../advice-response.model';
import { TWLService } from '../twl.service';

@Component({
  selector: 'app-counseling',
  templateUrl: './counseling.component.html',
  styleUrls: ['./counseling.component.css']
})
export class CounselingComponent implements OnInit {

  adviceResponse: AdviceResponse;
  constructor(private twlService: TWLService) {

    this.adviceResponse = new AdviceResponse(-1, "");
    this.twlService.getAdvice().subscribe(result => this.adviceResponse = result);
  }

  ngOnInit(): void {
  }

  moreAdvice() {
    this.twlService.getAdvice().subscribe(result => { this.adviceResponse = result; });
  }
}
