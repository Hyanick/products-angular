import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('username', this.username);
    console.log('password', this.password);
    this.router.navigate(['/accueil'])

    console.log('connecté')
  }

}
