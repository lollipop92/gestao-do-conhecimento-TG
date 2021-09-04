import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";

  constructor(
    private router: Router,
    private LoginService:LoginService
  ) { }

  ngOnInit(): void {
  }


  fazerLogin() {
    this.LoginService.login(this.email, this.password).then((data) => {
      console.log(data);
    });
  }

}
