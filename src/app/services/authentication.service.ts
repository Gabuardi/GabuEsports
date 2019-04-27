import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  // SERVICE PROPERTIES --------------------------
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // GET -> RETURN THE VALUE OF CURRENT USER LOCATED IN currentUserSubject
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // METHOD -> CONSULT THE API IN SEARCH OF JWT TOKEN WHEN USER TRY TO LOGIN
  login(username: string, password: string): Observable<User>  {
    return this.http.post<User>(`/users/authenticate`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  // METHOD -> REMOVE THE SESSION INFORMATION ABOUT THE USER LOGGED
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

} // SERVICE ENDS
