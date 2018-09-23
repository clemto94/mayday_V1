import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DIRECTION_FORWARD, DIRECTION_SWITCH, DIRECTION_BACK } from 'ionic-angular/navigation/nav-util';
import { TestNavPage } from '../../test-nav/test-nav'
import { PersonneConcernePage } from './personne-concerne/personne-concerne'
/**
 * Generated class for the UrgencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-urgence',
  templateUrl: 'urgence.html',
})
export class UrgencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  getUrgencePage() {
    return this.navCtrl.push(TestNavPage, {}, {direction: "bottom-to-top"});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UrgencePage');
  }
  // closeNavController(){
  //   this.navCtrl.pop().then(result => {
  //   })
  //   return 1
  // }
  closeNavController(){
    return this.navCtrl.remove(1,this.navCtrl.indexOf(this.navCtrl.getActive())).then(result => {
      console.log(result)
    }).catch(info => {
      console.log(info)
    })
  }
  removePage(){
    return this.navCtrl.removeView(this.navCtrl.getActive())
  }
  ionViewWillUnload(){
   console.log('detruit')
  }
  getPersonneConcernePage(){
    return this.navCtrl.push(PersonneConcernePage, {});
  }
}
