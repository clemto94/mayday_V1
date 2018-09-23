import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonneConcernePage } from './personne-concerne';

@NgModule({
  declarations: [
    PersonneConcernePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonneConcernePage),
  ],
})
export class PersonneConcernePageModule {}
