import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  constructor() { }

  titulo = "Monitor";
  icone = "../../../assets/imgs/monitor.JPG"

  ngOnInit(): void {
  }

}
