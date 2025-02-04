import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UmsService } from 'src/app/services/ums.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUser:FormGroup = new FormGroup({
    firstName: new FormControl(null , [Validators.required]),
    lastName: new FormControl(null , [Validators.required]),
    email: new FormControl(null , [Validators.required , Validators.email]),
    age: new FormControl(null , [Validators.required]),
    phone: new FormControl(null , [Validators.required]),
    birthDate: new FormControl(null , [Validators.required])
  })

  constructor(private serv:UmsService , private toaster:ToastrService){}

  add(){
    this.serv.add(this.addUser.value).subscribe({
      next:(res) =>{
        console.log(res);
        this.toaster.success('' , 'User added successfully')
      },
      error:(err) =>{
        console.log(err);
        
      },
      complete: () =>{
        this.addUser.reset()
      }
    })
  }
}
