import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ButtonModule } from 'primeng/button';
import { UsersComponent } from './components/users/users.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/add-user/add-user.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { usersReducer } from './states/reducers/users.reducers';
import { ROOT_REDUCERS } from './states/app.state';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([]),
    ButtonModule, 
    TableModule,
    InputTextModule,
    InputNumberModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ name: 'TEST'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, UsersComponent],
})
export class AppModule { }
