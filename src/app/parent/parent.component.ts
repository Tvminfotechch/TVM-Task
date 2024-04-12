import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  
  constructor(private userData: FormBuilder) {

  }

  userForm:FormGroup=this.userData.group({
    name:[""],
    age:[""]
  });

  postData(){

  }
}
