import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  // RETURN ALL USERS FROM THE API
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`/users`);
  }

} // SERVICE ENDS
