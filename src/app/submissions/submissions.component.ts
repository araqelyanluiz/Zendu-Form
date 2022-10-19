import { Component, OnInit } from '@angular/core';
import { SubmissionsService } from '../services/submissions.service';

declare var google:any;
@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent implements OnInit {
  forms: any[] = [];
  statuses: any[] = [];
  today: any | undefined;
  locations: any[] = [];
  options = {
    center: { lat: 40.205703, lng:  44.484243 },
    zoom: 13,
  };
  overlays:any[]=[];
  mapType:boolean = true;
  constructor(private service: SubmissionsService) {
    this.getLOcations();
  }

  ngOnInit(): void {
    this.today = new Date();
  }

  getLOcations() {
    this.locations = this.service.getLocations();
    this.locations.forEach(elem=>{
      this.overlays.push(new google.maps.Marker({position: {lat: elem.latitude, lng: elem.longitude},icon:"assets/icons/location.svg"}))
    })
  }
}
