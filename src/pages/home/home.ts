import { EventDetailPage } from '../event-detail/event-detail';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EventsServiceProvider } from './../../providers/events-service/events-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public events: any[];
  constructor(
    private _nav: NavController,
    private _eventsService: EventsServiceProvider
    ) {
  }

  ionViewDidLoad() {
    this._eventsService.getEvents().subscribe( 
        registros => { this.events = registros; },
        err => { console.log(err); }, 
      )
  }
  
  goToEvent(eventid){
    this._nav.push(EventDetailPage, {id : eventid})
  }
}