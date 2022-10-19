import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmissionsService {
  locations: any[] = [
    {
      flow: 'Requires Location',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 Dec 2022',
      status: 0,
      longitude: 44.47025,
      latitude: 40.200431,
    },
    {
      flow: 'Requires Location',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 Dec 2022',
      status: 1,
      longitude: 44.466602,
      latitude: 40.195842,
    },
    {
      flow: 'Requires Location',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 Dec 2022',
      status: 1,
      longitude: 44.460466,
      latitude: 40.198726,
    },
    {
      flow: 'Requires Location',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 Dec 2022',
      status: 2,
      longitude: 44.454586,
      latitude: 40.198693,
    },
    {
      flow: 'Requires Location',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 Dec 2022',
      status: 0,
      longitude: 44.459264,
      latitude: 40.193973,
    },
    {
      flow: 'Requires Location',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 Dec 2022',
      status: 2,
      longitude: 44.452646,
      latitude: 40.192869,
    },
  ];
  constructor() {}

  getLocations() {
    return this.locations;
  }
}
