import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TypeUrgence_1Page } from '../type-urgence-1/type-urgence-1'

/**
 * Generated class for the MonUrgencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mon-urgence',
  templateUrl: 'mon-urgence.html',
})
export class MonUrgencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  closeNavController(){
    return this.navCtrl.remove(1,2).then(result => {
      console.log(result)
    }).catch(info => {
      console.log(info)
    })
  }
  getBeforePage(){
    return this.navCtrl.pop()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MonUrgencePage');
  }
  getMonTypeUrgence1Page(data){
    return this.navCtrl.push(
      TypeUrgence_1Page,
      {personneConcerne: data},
      {direction: "bottom-to-top"}
    );
  }
}
