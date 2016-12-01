import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
/*
  Generated class for the Pendingtasktoshow page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pendingtasktoshow',
  templateUrl: 'pendingtasktoshow.html'
})
export class PendingtasktoshowPage {
  taskPending: FirebaseListObservable<any>;
  taskCompleted: FirebaseListObservable<any>;
  TodisplayIndet:any;

  constructor(public navCtrl: NavController,public af: AngularFire,public params: NavParams) {
    this.taskPending = af.database.list('/taskPENDING');
    this.taskCompleted = af.database.list('/taskCompleted');
    this.TodisplayIndet=this.params.get('key');
  }
  whichToSub2(ans){
    console.log(this.TodisplayIndet)
    let Title = this.TodisplayIndet.title
    let Sub = this.TodisplayIndet.sub
    let Con = this.TodisplayIndet.content
    console.log(Title)
    console.log(Sub)
    console.log(Con)
    this.taskCompleted.push({title:Title , sub:Sub , content:Con , answere:ans});
    this.taskPending.remove(this.TodisplayIndet.$key)
    this.navCtrl.pop()
  }


}
