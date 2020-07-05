import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get username(){
    return this.registrationForm.get('username');
  }
  constructor(private fb:FormBuilder){}

  registrationForm = this.fb.group({
    username : ['', [Validators.required, Validators.minLength(3)]],
    password: ['123456'],
    confirmPassword: ['123456'],
    address: this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  })
  title = 'reactiveFormsTutorial';
  // registrationForm = new FormGroup({
  //   username : new FormControl('suvan'),
  //   password: new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address: new FormGroup({
  //     city : new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode : new FormControl(''),
  //   })
  // });
  loadApiData(){
    this.registrationForm.setValue({
      username: "sk",
      password: "123456",
      confirmPassword: "123456",
      address:{
        city: "asdf",
        state: "sdfd",
        postalCode:"asdf"
      }
    })
  }
}
