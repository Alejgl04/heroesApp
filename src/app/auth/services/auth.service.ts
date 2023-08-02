import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = enviroments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User|undefined {
    if ( !this.user ) return undefined;
    return structuredClone(this.user);
  }

  login( email: string, password: string ): Observable<User> {

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap( user => this.user = user ),
        tap( user => localStorage.setItem('token', 'asdasd.adsqwe.ASDAEcxcZXC' )),
      )

  }

  logOut() {
    this.user = undefined;
    localStorage.removeItem('token');
  }
}
