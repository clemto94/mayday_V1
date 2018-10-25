import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { CallDirectory } from '@ionic-native/call-directory'
/**
 * Generated class for the DetailUrgencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-urgence',
  templateUrl: 'detail-urgence.html',
})
export class DetailUrgencePage {

  constructor(private callDirectory: CallDirectory, public navCtrl: NavController, public navParams: NavParams) {
  }
  closeNavController(){
    return this.navCtrl.remove(1,this.navCtrl.indexOf(this.navCtrl.getActive())).then(result => {
      console.log(result)
    }).catch(info => {
      console.log(info)
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailUrgencePage');
  }
  getContact(){
    console.log('contact :', this.callDirectory.getAllItems())
    // .then((res: any) => console.log(res))
    // .catch((error: any) => console.error(error));
  }
}
