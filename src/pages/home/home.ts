import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UrgencePage } from './urgence/urgence';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  getUrgencePage() {
    this.navCtrl.push(UrgencePage, {}, {direction: "bottom-to-top"});
  }
  removePage(){
    return this.navCtrl.removeView(this.navCtrl.getActive())
  }
  // ionViewWillEnter(){
  //   this.removePage()
  // }
}
