import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndividusSurLieuxPage } from './individus-sur-lieux/individus-sur-lieux'
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
    switch (this.navParams.data.typeUrgence_1) {
      case 'sécuritaire':
        return this.navCtrl.push(
          IndividusSurLieuxPage,
          this.navParams.data
        )
      default:
      break
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LieuPage');
  }

}
