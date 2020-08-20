import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Firebase setup instructions

// 1. delete this line, then...
// import { eno } from '../environments/environment';
import { PasswordlessAuthComponent } from './passwordless-auth/passwordless-auth.component';

// 2. Add your own firebase config to environment.ts
// 3. Use the environment to initialize angularfire2 below, like so AngularFireModule.initializeApp(environment.firebaseConfig),

@NgModule({
  declarations: [
    AppComponent,
    PasswordlessAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
