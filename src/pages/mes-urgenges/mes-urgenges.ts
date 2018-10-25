import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { DataProvider } from '../../providers/data/data.service'
import { LoadingController } from 'ionic-angular'
import { DetailUrgencePage } from './detail-urgence/detail-urgence'
// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions'

// @IonicPage()
@Component({
  selector: 'page-mes-urgenges',
  templateUrl: 'mes-urgenges.html',
})
export class MesUrgengesPage {

  private urgenceSaved = []
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public dataService: DataProvider, 
    public loadingCtrl: LoadingController
  ) {}
  ionViewWillEnter(){
    // console.log('will enter')
    this.dataService.getAllDocs().then((result) => {
      let numberOfUrgence = result.rows.filter(doc => {
        if (doc.doc.enCours) {
          return doc.doc.enCours 
        }
      }).length
      this.dataService.setCurrentUrgence(numberOfUrgence)
      // console.log(' number urgence', numberOfUrgence)
    }).catch((err) => {
      console.log(err);
    })
    this.updatePage()
  }
  getDetailPage(item){
    item.enCours = false
    this.dataService.updateDoc(item)
    this.dataService.decrementCurrentUrgence()
    return this.navCtrl.push(
      DetailUrgencePage,
      item
    )
    // this.ionViewWillEnter()
  }
  swipeDelete(documentSelected){
    this.dataService.deleteDoc(documentSelected).then(result => {
      this.urgenceSaved.forEach((doc, iDoc) => {
        if (documentSelected._id === doc._id) {
          this.urgenceSaved.splice(iDoc,1)
        }
      })
    })
  }
  updatePage() {
    let loading = this.loadingCtrl.create()
    loading.present()
    
    this.dataService.getAllDocs().then((result) => {
      console.log('Les documents:', result)
      this.urgenceSaved = result.rows.map(doc => { return doc.doc })
      loading.dismiss()
    }).catch((err) => {
      console.log(err);
    })
  }
}
