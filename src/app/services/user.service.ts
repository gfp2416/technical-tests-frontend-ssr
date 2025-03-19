import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { appsettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ApiUrl: string = appsettings.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.ApiUrl);
  }

  getUserById(_id: number): Observable<User>{
    return this.http.get<User>(this.ApiUrl + '/id: int?id=' + _id);
  }

   addUser(_user: any): Observable<User>{
    return this.http.post<User>(this.ApiUrl, _user);
  }

  updateUser(_user: any): Observable<User>{
    return this.http.put<User>(this.ApiUrl, _user);
  }

  deleteUser(_id: number): Observable<User>{
    return this.http.delete<User>(`${this.ApiUrl}/${_id}`);
  }
 





}
