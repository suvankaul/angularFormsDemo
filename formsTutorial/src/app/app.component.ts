import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService} from './enrollment.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsTutorial';
  topics = ['Angular','React','Vue'];
  topicHasError = true;
  submitted = false; 
  errorMsg ='';

  userModel = new User('Suvan','sk@gmail.com',1234567890,'default','morning',true);

  validateTopic(value){
    if(value === "default"){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }

  constructor(private _enrollmentService:EnrollmentService){  
  }

  onSubmit(userForm){
    console.log(userForm);
    
    // this.submitted = true;
    // this._enrollmentService.enroll(this.userModel).subscribe(
    //   data => console.log("Sucesss",data),
    //   error => this.errorMsg = error.statusText
    // )
  }
}
