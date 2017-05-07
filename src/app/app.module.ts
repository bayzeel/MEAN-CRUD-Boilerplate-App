import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { AddComponent } from './add/add.component';

import { ItemsService } from './items.service';
import { AddService } from './add.service';


const ROUTES = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ItemsService,
    AddService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
