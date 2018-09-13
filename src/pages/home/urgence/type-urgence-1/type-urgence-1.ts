import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  private personneConcerne
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('param', navParams.get('personneConcerne'))
    this.personneConcerne = navParams.get('personneConcerne')
  }
  closeNavController(){
    return this.navCtrl.remove(1,3).then(result => {
      console.log(result)
    }).catch(info => {
      console.log(info)
    })
  }
  getBeforePage(){
    return this.navCtrl.pop()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeUrgence_1Page');
  }
  test(){
    console.log('personne', this.personneConcerne)
  }
}
