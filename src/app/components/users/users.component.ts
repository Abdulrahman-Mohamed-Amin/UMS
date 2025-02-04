import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interface/user';
import { UmsService } from 'src/app/services/ums.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users:User[] = JSON.parse(localStorage.getItem('arr')!)
  p:number = 1
  constructor(private service:UmsService , private toaster:ToastrService){}

  ngOnInit(): void {
    this.getAllusers()
  }
  getAllusers(){
    this.service.getUsers().subscribe((res) =>{
      this.users = res.users
    }, err=>{
    })
  }
  delete(i:number){
    this.service.deleteUser(i).subscribe({
      next:(res) =>{
        this.toaster.success("" , "User deleted Successfuly")
      }
    })
  }
}
