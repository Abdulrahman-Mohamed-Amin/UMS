import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UmsService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get('https://dummyjson.com/users')
  }

  login(obj: any) :Observable<any> {
    return this.http.post("https://dummyjson.com/auth/login" , obj)
  }
  add(obj: any) :Observable<any> {
    return this.http.post("https://dummyjson.com/users/add" , obj)
  }

  updateUser(user:any): Observable<any>{
    return this.http.put(`https://dummyjson.com/users/${user}` , user)
  }
  deleteUser(id:any): Observable<any>{
    return this.http.delete(`https://dummyjson.com/users/${id}`)
  }
}
