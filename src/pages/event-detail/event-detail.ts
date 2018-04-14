import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import { EventsServiceProvider } from './../../providers/events-service/events-service';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  public detailevents: any[];
  constructor(
    private _nav: NavController,
    private _navPar: NavParams,
    private _detaileventsService: EventsServiceProvider
    ) {
  }

  ionViewDidLoad() {
    this._detaileventsService.getEvent( this._navPar.get('id') ).subscribe( 
        registros => { this.detailevents = registros; },
        err => { console.log(err); }, 
      )
  }

}
