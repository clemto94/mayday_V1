import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TypeUrgence_2Page } from './type-urgence-2/type-urgence-2'

/**
 * Generated class for the TypeUrgence_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-urgence-1',
  templateUrl: 'type-urgence-1.html',
})
export class TypeUrgence_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  closeNavController(){
    return this.navCtrl.remove(1,this.navCtrl.indexOf(this.navCtrl.getActive())).then(result => {
      console.log(result)
    }).catch(info => {
      console.log(info)
    })
  }
  getBeforePage(){
    return this.navCtrl.pop()
  }
  ionViewDidLoad() {
    console.log('page type urgence 1', this.navParams.data)
  }
  goToTypeUrgence2(value) {
    this.navParams.data.typeUrgence_1 = value
    return this.navCtrl.push(
      TypeUrgence_2Page,
      this.navParams.data
    )
  }
}
