import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { DataProvider } from '../../../providers/data/data.service'
import { ToastController } from 'ionic-angular'
import { idGenerator } from '../../../models/idGenerator'

@IonicPage()
@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html',
})
export class ValidationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private toastCtrl: ToastController) {
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
    console.log('ionViewDidLoad ValidationPage');
  }
  sendUrgence(){
    // let date = new Date
    // console.log('id random ', Math.random().toString(36).substr(2, 9))
    this.navParams.data.date = new Date
    this.navParams.data.enCours = true
    this.navParams.data._id = idGenerator(32)
    this.dataProvider.putData(this.navParams.data).then(response => {
      const toast = this.toastCtrl.create({
        message: 'Votre urgence a été envoyée',
        position: 'top',
        duration: 3000
      })
      toast.present()
      this.closeNavController()
      let number = this.dataProvider.getCurrentUrgence()
      number = number++
      this.dataProvider.setCurrentUrgence(this.dataProvider.getCurrentUrgence() + 1)
    })
  }
}
