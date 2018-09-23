import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the MaydayHeaderFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mayday-header-form',
  templateUrl: 'mayday-header-form.html'
})
export class MaydayHeaderFormComponent {

  @Input('firstPage') isFirstPage: boolean = false
  @Output() closePage = new EventEmitter ()
  @Output() beforePage = new EventEmitter ()

  text: string;

  constructor() { }
  ngAfterViewInit() {
    console.log('first page', this.isFirstPage)
  }
  emitBeforePage(){
    this.beforePage.emit('before')
  }
  emitCloseNavController(){
    this.closePage.emit('close')
  }
}
