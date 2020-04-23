import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private firestore:AngularFirestore) { }
  getStudents(){
    return this.firestore.collection('students').snapshotChanges();
  }
}
