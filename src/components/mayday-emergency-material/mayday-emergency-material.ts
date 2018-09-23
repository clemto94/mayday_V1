import { Component, Input, Output, EventEmitter } from '@angular/core'

/**
 * Generated class for the MaydayEmergencyMaterialComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mayday-emergency-material',
  templateUrl: 'mayday-emergency-material.html'
})
export class MaydayEmergencyMaterialComponent {
  @Input('data') dataInput
  @Output() dataOutput = new EventEmitter ()

  private textDisplay: string[] = ['', '', '', ''];
  private datasDisplay= {
    'médicale': ['blessure', 'douleur', 'chute', 'accident'],
    'matérielle': ['feu', 'eau', 'tempête', 'neige'],
    'sécuritaire': ['vol', 'agression', 'effraction', 'dégradation']
  }
  
  constructor() { }

  emitEvent(value){
    this.dataOutput.emit(value)
  }
  // TODO: voir fonctionalité de cette evenement Angular
  ngAfterViewInit(){
    this.textDisplay = this.datasDisplay[this.dataInput]
  }
}
