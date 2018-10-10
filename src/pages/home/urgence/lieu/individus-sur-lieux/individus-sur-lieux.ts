import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { InfoPage } from "../../info/info"
/**
 * Generated class for the IndividusSurLieuxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-individus-sur-lieux',
  templateUrl: 'individus-sur-lieux.html',
})
export class IndividusSurLieuxPage {

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
  ionViewDidLoad() {
    console.log('ionViewDidLoad IndividusSurLieuxPage')
  }
  getInfoPage(info){
    this.navParams.data.information = info
    console.log(this.navParams.data)
    return this.navCtrl.push(
      InfoPage,
      this.navParams.data
    )
  }
}
