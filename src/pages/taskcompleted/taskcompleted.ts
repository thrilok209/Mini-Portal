import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


/*
  Generated class for the Taskcompleted page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-taskcompleted',
  templateUrl: 'taskcompleted.html'
})
export class TaskcompletedPage {

  taskPending: FirebaseListObservable<any>;
  taskCompleted: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,af: AngularFire, ) {
    this.taskPending = af.database.list('/taskPENDING');
    this.taskCompleted = af.database.list('/taskCompleted');
  }

}
