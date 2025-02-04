import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UmsService } from 'src/app/services/ums.service';
import { jwtDecode } from "jwt-decode";
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit{
  currentUser?:any;
  constructor(private _activeted:ActivatedRoute , private _service:UmsService){}
   token:string = ''
  ngOnInit(): void {
    this.getuser()
  }

  getuser(){
    const token = localStorage.getItem('token')!
    const decoded = jwtDecode(token)
    this.currentUser = decoded
  }
}
