import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonUrgencePage } from './mon-urgence';

@NgModule({
  declarations: [
    MonUrgencePage,
  ],
  imports: [
    IonicPageModule.forChild(MonUrgencePage),
  ],
})
export class MonUrgencePageModule {}
