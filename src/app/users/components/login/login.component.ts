import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token) {
      localStorage.setItem('token',token.userName);
      //console.log('Login successful');
      alert("Login Successful");
      this.router.navigate(['/books/available-books']);
    } else {
      //console.log('Login not successful')
      alert("Login not successful");
    }
  }

}
