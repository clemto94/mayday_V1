import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the MaydayLieuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mayday-lieu',
  templateUrl: 'mayday-lieu.html'
})
export class MaydayLieuComponent {

  @Output() dataOutput = new EventEmitter()
  @Input('data') dataInput

  private datasDisplay= {
    'matérielle': ['intérieur', 'extérieur', 'les deux'],
    'sécuritaire': ['domicile', 'dans la rue', 'autre']
  }
  constructor() { }
  ionViewWillEnter() {}
  goToIndividusPage(value) {
    this.dataOutput.emit(value)
  }
}
