import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { MyData } from '../../providers/my-data';

import {Observable} from 'rxjs';
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
  usertask=[];
  cuserName;
  taskPendingTodisplay:Observable<any>;

  TaskArr=[];
  constructor(public navCtrl: NavController,public af: AngularFire,public params: NavParams,public myData:MyData) {
    this.cuserName=this.myData.Name
    this.taskPending = af.database.list('/taskPENDING');
    this.taskCompleted = af.database.list('/taskCompleted');
    this.TodisplayIndet=this.params.get('key');



    this.taskPending.subscribe(result => {
      //  console.log(result);
       this.TaskArr=result;
      //  console.log(this.TaskArr)

        //  console.log(ele)

    });
  }
  whichToSub2(ans){
    console.log(this.TodisplayIndet)
    let Title = this.TodisplayIndet.title
    let Sub = this.TodisplayIndet.sub
    let Con = this.TodisplayIndet.content
    let userDet = this.TodisplayIndet.userschecked
    let userDET;
    // console.log(userDet)
    console.log(Title)
    console.log(Sub)
    console.log(Con)
    for(let i = 0 ; i<userDet.length ; i++){
      console.log("insidesdjh")
      if(this.cuserName ==userDet[i] ){
      this.TodisplayIndet.userschecked[i]=""
      }

    }
    console.log(userDet)
    this.taskPending.update(this.TodisplayIndet.$key, {userschecked:this.TodisplayIndet.userschecked })
    this.taskCompleted.push({title:this.cuserName, sub:Title , content:Con , answere:ans  });
    // this.taskPending.remove(this.TodisplayIndet.$key)
    this.navCtrl.pop()


}
}
// for(let i=0;i<this.TaskArr.length;i++){
//  // console.log(this.TaskArr[i].userschecked)
//  for(let j=0;j<this.TaskArr[i].userschecked.length;j++){
//    //  console.log(this.TaskArr[i].userschecked[j])
//     let checkName=this.TaskArr[i].userschecked[j]
//     console.log(this.cuserName)
//    if(  this.cuserName == checkName){
//     //  this.usertask.push(this.TaskArr[i])
//      console.log("inside ch"+ checkName)
//     //  updateItem(key: string, newText: string) {
//         this.taskPending.update(this.TodisplayIndet.$key, { text: newText });
//
//    }

//  }
//  this.taskPendingTodisplay=Observable.from(this.usertask).toArray();
// console.log(this.usertask)
// for(let i=0;i<user.length;i++){
//  if(  this.cuserName == user[i]){
//   this.taskPending.update(this.TodisplayIndet.$key, { userschecked[1].push("") });
// }
//
// }
