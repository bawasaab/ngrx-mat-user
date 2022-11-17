import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { iSignIn } from './model/signIn';
import { iUser } from '../user/models/user.model';
import { SignInService } from './services/sign-in.service';
import { Router } from '@angular/router';
import { SignInActions } from './action-types';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signInService: SignInService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signInForm.value);
    const data = <iSignIn>this.signInForm.value
    this.signInService.signIn(data)
    .pipe(
      tap((user: iUser) => {
        /**
         const action = {
           type: 'Sign Action',
           payload: {
             user
           }
         }
         this.store.dispatch(action)
         this.store.dispatch(signInAction({user: user}))
         */
        console.log('user', user)
        this.store.dispatch(SignInActions.signIn({user}))
        this.router.navigateByUrl('/users')
      })
    )
    .subscribe()
  }

}
