// import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
// import { UrgenceModel } from '../../models/urgenceData'
import PouchDB from 'pouchdb'

@Injectable()
export class DataProvider {
  private db
  private numberOfUrgence = 0
  constructor() {
    console.log('Hello DataProvider Provider')
    this.db = new PouchDB('mesUrgnence')
    this.getAllDocs().then((result) => {
      this.numberOfUrgence = result.rows.filter(doc => {
        if (doc.doc.enCours) {
          return doc.doc.enCours 
        }
      }).length
      console.log(' number urgence', this.numberOfUrgence)
    }).catch((err) => {
      console.log(err);
    })
  }
  putData (data){
    return this.db.put(data)
  }
  getAllDocs (){
    return this.db.allDocs({
      include_docs: true,
      attachments: true
    })
  }
  getDoc (doc){
    return this.db.get(doc._id)
  }
  deleteDoc (doc){
    return this.db.get(doc._id).then(docResult => {
      return this.db.remove(docResult._id, docResult._rev).then(result => {
        console.log('document supprimer', result)
      })
    }).catch((err) => {
      console.log(err)
    })
  }
  updateDoc(doc) {
    this.db.get(doc._id).then(docResult => {
      doc._rev = docResult._rev
      return this.db.put(doc)
    })
  }

  getCurrentUrgence(){
    return this.numberOfUrgence
  }
  setCurrentUrgence(number){
    console.log('set number', number)
    this.numberOfUrgence = number
  }
  incrementCurrentUrgence(){
    this.numberOfUrgence = this.numberOfUrgence + 1
    return this.numberOfUrgence
  }
  decrementCurrentUrgence(){
    this.numberOfUrgence = this.numberOfUrgence - 1
    if (this.numberOfUrgence < 0) {
      this.numberOfUrgence = 0
    }
    return this.numberOfUrgence
  }
}
