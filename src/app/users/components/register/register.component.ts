import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../models/IUser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert: boolean = false;
  user: any = {};
  
  
  createUser = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
     console.log(this.createUser.value);
    /*this.registrationService.register(this.createUser.value)
    .subscribe( response => {
      this.alert = true;
      this.createUser.reset();
      console.log(response,'data created successfully')
    }) */
   
    this.user = Object.assign(this.user, this.createUser.value);
    this.userService.addUser(this.user);
    alert('User Registered successfully');
    this.createUser.reset();
    
  }


 /*  userData(): IUser {
    return this.user = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    }

  } */

 /*  get name() {
    return this.createUser.get('name') as FormControl;
  }
  get email() {
    return this.createUser.get('email') as FormControl;
  }
  get password() {
    return this.createUser.get('password') as FormControl;
  }
   */

  closeAlert() {
    this.alert = false;
  }

}
