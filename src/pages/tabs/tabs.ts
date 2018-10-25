import { Component } from '@angular/core'
import { AboutPage } from '../about/about'
import { ContactPage } from '../contact/contact'
import { HomePage } from '../home/home'
import { MesUrgengesPage } from '../mes-urgenges/mes-urgenges'
import { DataProvider } from '../../providers/data/data.service'
import { NavController, NavParams } from 'ionic-angular'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  numberOfUrgence = this.dataProvider.getCurrentUrgence()
  tab1Root = HomePage
  tab2Root = AboutPage
  tab3Root = ContactPage
  tab4Root = MesUrgengesPage

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {}
  ionViewDidLoad(){
    console.log('will enter tabs', this.dataProvider.getCurrentUrgence())
    this.numberOfUrgence = this.dataProvider.getCurrentUrgence() 
  }
  // ionViewWillEnter(){
  //   console.log('will enter tabs', this.dataProvider.getCurrentUrgence())
  //   this.numberOfUrgence = this.dataProvider.getCurrentUrgence()   
  // }
}
