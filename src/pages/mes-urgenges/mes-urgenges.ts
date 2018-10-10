import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MesUrgengesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-mes-urgenges',
  templateUrl: 'mes-urgenges.html',
})
export class MesUrgengesPage {
  private items = ["moi", "toi", "nous"]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesUrgengesPage');
  }
  itemSelected(item){
    console.log("hello", item)
  }
}
