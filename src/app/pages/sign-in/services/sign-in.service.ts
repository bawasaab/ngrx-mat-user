import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iUser } from '../../user/models/user.model';
import { iSignIn } from '../model/signIn';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(
    private http: HttpClient
  ) { }

  signIn(data: iSignIn): Observable<iUser> {
    return this.http.post<iUser>('http://localhost:3000/auth/login', {email: data.email, password: data.password})
  }
}
