import { Slip } from "./slip.model";

export class AdviceResponse {


  slip: Slip;

  constructor(Id: number, Advice: string) {

    this.slip = new Slip(Id, Advice);
    
  }
}
