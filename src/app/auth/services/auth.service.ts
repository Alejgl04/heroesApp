import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = enviroments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User|undefined {
    if ( !this.user ) return undefined;
    return structuredClone(this.user);
  }

}
