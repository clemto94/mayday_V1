import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestNavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-nav',
  templateUrl: 'test-nav.html',
})
export class TestNavPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestNavPage');
  }
  
  closeNavController(){
    return this.navCtrl.remove(1,2).then(result => {
      console.log(result)
    }).catch(info => {
      console.log(info)
    })
  }
}
