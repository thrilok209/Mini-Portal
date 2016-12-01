import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { PendingtasktoshowPage } from '../pendingtasktoshow/pendingtasktoshow';

/*
  Generated class for the Taskpending page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-taskpending',
  templateUrl: 'taskpending.html'
})
export class TaskpendingPage {
  taskPending: FirebaseListObservable<any>;
  taskCompleted: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,af: AngularFire, ) {
    this.taskPending = af.database.list('/taskPENDING');
    this.taskCompleted = af.database.list('/taskCompleted');
  }

  whichToSub(key){

   this.navCtrl.push(PendingtasktoshowPage,{key});
  //  this.pendingtasktoshowPage.whichToShow(key);
  }

  // ionViewDidLoad() {
  //   console.log('Hello TaskpendingPage Page');
  // }

}
