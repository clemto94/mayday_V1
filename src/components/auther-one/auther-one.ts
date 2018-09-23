import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'auther-one',
  templateUrl: 'auther-one.html'
})
export class AutherOneComponent {
  @Input('input') textInput
  @Output() unEvent = new EventEmitter ()
  text: string;

  constructor() {
    console.log('Hello MaydayEmergencyMaterialComponent Component');
    this.text = 'Hello World';
  }
  // TODO: voir fonctionalité de cette evenement Angular
  // equivalent à ionViewWillEnter()
  ngAfterViewInit(){
    this.text = this.textInput
    setInterval(() => {
      this.unEvent.emit("It's time!!")
    }, 3000)
  }
}
