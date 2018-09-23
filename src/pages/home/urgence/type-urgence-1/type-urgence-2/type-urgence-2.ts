import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TypeUrgence_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-urgence-2',
  templateUrl: 'type-urgence-2.html',
})
export class TypeUrgence_2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {   
  }
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
  // TODO créer une page lieu
  goToLieuPage(event){
    console.log(event)
  }
  ionViewDidLoad() {
    console.log('page type urgence 2', this.navParams.data)
  }
}
