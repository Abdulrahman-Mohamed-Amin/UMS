import { Component, OnInit } from '@angular/core';
import { UmsService } from './services/ums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private umsservice:UmsService){}
  ngOnInit(): void {
  }


}
