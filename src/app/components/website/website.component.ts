import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { User } from 'src/app/interface/user';
import { UmsService } from 'src/app/services/ums.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent {
  toggle:boolean = false
  currentUser?:any;
  constructor( private _service:UmsService){}
   token:string = ''
  ngOnInit(): void {
    this.getuser()
  }

  getuser(){
    const token = localStorage.getItem('token')!
    const decoded = jwtDecode(token)
    this.currentUser = decoded
  }

  open(){
    this.toggle = true
  }
  close(){
    this.toggle = false
  }

}
