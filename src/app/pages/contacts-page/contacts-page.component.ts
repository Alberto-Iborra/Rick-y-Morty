import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  userRegisterForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      age: [Number, [Validators.required, Validators.min(18)]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
      passwordRepeat: ['', [Validators.required, Validators.maxLength(20)]],
  })
  }
  submit(){
    console.log(this.userRegisterForm);
    console.log(this.userRegisterForm.value);

  }

}
