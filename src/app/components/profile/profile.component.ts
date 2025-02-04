import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { User } from 'src/app/interface/user';
import { UmsService } from 'src/app/services/ums.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser?:any;
  user:any;
  constructor(private _service:UmsService){}
   token:string = ''
  ngOnInit(): void {
    this.getuser()
  }

  getuser(){
    const token = localStorage.getItem('token')!
    const decoded = jwtDecode(token)
    this.currentUser = decoded
    this._service.getUsers().subscribe((res) =>{
      this.user = res.users[this.currentUser.id -1]
      
    })
  }
}
