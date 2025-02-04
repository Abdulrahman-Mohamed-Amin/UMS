import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UmsService } from './../../services/ums.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  access:boolean = false
  login:FormGroup = new FormGroup({
    'username': new FormControl(null , [Validators.required , Validators.minLength(4)]),
    'password': new FormControl(null , [Validators.required])
  })
  constructor(private _UmsService:UmsService , private _router:Router , private toaster:ToastrService){}
ngOnInit(): void {
}

getAuth(){
  this._UmsService.login(this.login.value).subscribe({
    next:(res) =>{
      localStorage.setItem('token' , res.accessToken)
      this._router.navigateByUrl('/website')
    },
    error:(err) =>{
      this.toaster.error("", "No record Found");
    },
    complete:() =>{
      this.toaster.success('' , 'Login Successfuly')
    }
  })
    
}
}
