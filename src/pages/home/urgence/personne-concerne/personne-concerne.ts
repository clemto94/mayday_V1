import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TypeUrgence_1Page } from '../type-urgence-1/type-urgence-1'

/**
 * Generated class for the PersonneConcernePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'personne-concerne',
  templateUrl: 'personne-concerne.html',
})
export class PersonneConcernePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  closeNavController(){
    // toute les pages push sont empilé, pour les suprimer il faut connaitre l'index courant de la vue
    // supprime toute les pages de la pile, de la première a la page courante
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
    console.log('ionViewDidLoad PersonneConcernePage');
  }
  getMonTypeUrgence1Page(data){
    return this.navCtrl.push(
      TypeUrgence_1Page,
      {personneConcerne: data},
      {direction: "bottom-to-top"}
    );
  }
}
