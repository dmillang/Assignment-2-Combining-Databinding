import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allowNameReset: boolean = false;
  loginName: string = '';
  // loginNameStatus = 'Please provide your user name';
  loginNameStatus = 'Your user name is ' + this.loginName;

  constructor() {

  }

  ngOnInit(): void {
  }

  onResetName() {
    
  }

  onUpdateName(event: Event) {
    this.loginName = (<HTMLInputElement>event.target).value;
    this.loginNameStatus = (<HTMLInputElement>event.target).value;
  }

}
