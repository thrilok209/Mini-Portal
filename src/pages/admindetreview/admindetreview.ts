import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import {Observable} from 'rxjs';
import { MyData } from '../../providers/my-data';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

/*
  Generated class for the Admindetreview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-admindetreview',
  templateUrl: 'admindetreview.html'
})
export class AdmindetreviewPage {
  cuserName;
  taskPendingTodisplay:Observable<any>;
  TodisplayIndet:any;
  constructor(public navCtrl: NavController,public params: NavParams,public myData:MyData) {
    this.cuserName=this.myData.Name
    this.TodisplayIndet=this.params.get('key');
  }

  whichToSub3(){
    this.navCtrl.pop()
  }


}
