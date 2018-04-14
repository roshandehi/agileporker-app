export class Message {
  constructor(public type: String, public message: string) { }

  public toString(){
     return JSON.stringify(this);
  }
}