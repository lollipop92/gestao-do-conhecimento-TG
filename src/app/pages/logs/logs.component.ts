import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  constructor() { }

  titulo = "Logs do Sistema";
  icone = "../../../assets/imgs/logs.JPG"

  ngOnInit(): void {
  }

}