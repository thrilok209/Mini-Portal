import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { MyData } from '../../providers/my-data';
/*
  Generated class for the Admintaskadding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adminaddingtask',
  templateUrl: 'adminaddingtask.html'
})
export class AdminaddingtaskPage {
   alerttext;
   text1;

   taskPending: FirebaseListObservable<any>;
   taskCompleted: FirebaseListObservable<any>;
   taskUser: FirebaseListObservable<any>;
  //  user;
  //  Name;
   NameArr=[];
   userName=[]
   constructor(public navCtrl: NavController,af: AngularFire, public myData:MyData) {
     this.taskPending = af.database.list('/taskPENDING');
     this.taskCompleted = af.database.list('/taskCompleted');
     this.taskUser = af.database.list('/users');
       this.taskUser.subscribe(result => { console.log(result);this.NameArr=result
         let USERname= this.userName
       this.NameArr.forEach(function(ele){
         USERname.push(ele.name)
       })
       console.log(USERname) })
   }
  //  TotalUsers=this.myData.usersArr()


  addingTasks(Title,Sub,Content){
    // this.TotalUsers
    if(Sub.length<=1 || Title.length<=1 || Content.length<=1){
     this.alerttext="enter a valid"

    //  console.log("check1")
    }else{
      this.taskPending.push({ title: Title , sub: Sub, content:Content });
      // console.log(this.taskPending)
      return this.text1=' '
  }
     

}
}
