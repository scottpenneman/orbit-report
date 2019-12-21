import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})

export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() {
  }

  ngOnInit() {
  }

  totalSatellites() {
    return this.satellites.length;
  }

  countSpaceDebris() {
    let spaceDebris: number = 0;
    for (const satellite of this.satellites) {
      if (satellite.type === 'Space Debris') {
        spaceDebris++;
      }
    } return spaceDebris;
  }

  countCommunication() {
    let communication: number = 0;
    for (const satellite of this.satellites) {
      if (satellite.type === 'Communication') {
        communication++;
      }
    } return communication;
  }

  countProbe() {
    let probe: number = 0;
    for (const satellite of this.satellites) {
      if (satellite.type === 'Probe') {
        probe++;
      }
    } return probe;
  }

  countPositioning() {
    let positioning: number = 0;
    for (const satellite of this.satellites) {
      if (satellite.type === 'Positioning') {
        positioning++;
      }
    } return positioning;
  }

  countSpaceStation() {
    let spaceStation: number = 0;
    for (const satellite of this.satellites) {
      if (satellite.type === 'Space Station') {
        spaceStation++;
      }
    } return spaceStation;
  }

  countTelescope() {
    let telescope: number = 0;
    for (const satellite of this.satellites) {
      if (satellite.type === 'Telescope') {
        telescope++;
      }
    } return telescope;
  }

}
