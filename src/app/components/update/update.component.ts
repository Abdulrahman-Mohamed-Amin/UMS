import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interface/user';
import { UmsService } from 'src/app/services/ums.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  updateForm:FormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    birthdate: new FormControl()
  })

  user?:User;

  constructor(private serv:UmsService ,private activeted:ActivatedRoute , private toaster:ToastrService){}
  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.serv.getUsers().subscribe((res) =>{
      this.user = res.users[Number(this.activeted.snapshot.params['id']) - 1]

      
    })
  }
  update(){
    this.serv.updateUser(this.activeted.snapshot.params['id']).subscribe({
      next:(res) =>{
        this.toaster.success('' , 'User Updated Successfuly')
      }
    })
  }

}
