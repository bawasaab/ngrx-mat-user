import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SignInState } from './pages/reducers';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-mat-user';

  constructor(
    private store: Store<SignInState>
  ) {}

  ngOnInit(): void {
    this.store.subscribe(state => console.log('state', state))
    this.store.select('user').subscribe((result) => {
      console.log('result', result)
    })
  }
}
