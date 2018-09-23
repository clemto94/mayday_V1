import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LieuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lieu',
  templateUrl: 'lieu.html',
})
export class LieuPage {

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
  getAfterPage(event){
    this.navParams.data.lieu = event
    console.log(this.navParams.data)
    // return this.navCtrl.push(
    //   LieuPage,
    //   this.navParams.data
    // )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LieuPage');
  }

}
