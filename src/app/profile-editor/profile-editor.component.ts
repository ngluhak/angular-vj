import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent   {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    adress: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(
    private fb: FormBuilder
  ){}

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.fb.control(''))
  }

  //profileForm= new FormGroup({
    //firstName: new FormControl(''),
   // lastName: new FormControl(''),
   // adress: new FormGroup({
   //   street: new FormControl(''),
   //   city: new FormControl(''),
   //   state: new FormControl(''),
   //   zip: new FormControl(''),
  //  })
 // });

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Theodora',
      lastName: 'Johnson',
      adress: {
        street: 'Street street',
        zip: '123456789'
      }
    });
  }


}
