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
   userSchecked;

   taskPending: FirebaseListObservable<any>;
   taskCompleted: FirebaseListObservable<any>;
   taskUser: FirebaseListObservable<any>;
   taskUser2: FirebaseListObservable<any>;
  //  user;
  //  Name;
   NameArr=[];
   userName=[]
   constructor(public navCtrl: NavController,af: AngularFire, public myData:MyData) {
     this.taskPending = af.database.list('/taskPENDING', { preserveSnapshot: true });
     this.taskPending
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          // console.log(snapshot.key)
          // console.log(snapshot.val())
        });
      })
     this.taskCompleted = af.database.list('/taskCompleted');

     this.taskUser = af.database.list('/users');
       this.taskUser.subscribe(result => { console.log(result);this.NameArr=result
         let USERname= this.userName
       this.NameArr.forEach(function(ele){
         USERname.push(ele.name)
       })
       console.log(USERname) })
       let usersss = this.userName[1]
      //  let dhdg = '/"usersss"'
      //  this.taskUser2 = af.database.list(dhdg);
    }
  //  TotalUsers=this.myData.usersArr()


  addingTasks(Title,Sub,Content){
    // this.TotalUsers
    if(Sub.length<=1 || Title.length<=1 || Content.length<=1){
     this.alerttext="enter a valid"

    //  console.log("check1")
    }else{
      this.taskPending.push({ title: Title , sub: Sub, content:Content , userschecked:this.userSchecked});
      // this.taskUser2.push({ title: Title , sub: Sub, content:Content , userschecked:this.userSchecked});
      // console.log(this.taskPending)
      return this.text1=' '
  }


}

checked(e){
  this.userSchecked=e
  console.log(e);
}

}
