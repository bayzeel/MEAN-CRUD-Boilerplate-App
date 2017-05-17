import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

import { ItemsService } from './items.service';
import { OneItemService } from './one-item.service';
import { AddService } from './add.service';
import { EditService } from './edit.service';
import { DeleteService } from './delete.service';

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
  },
  {
    path: 'edit/:itemID',
    component: EditComponent
  },
  {
    path: 'delete/:itemID',
    component: DeleteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddComponent,
    EditComponent,
    DeleteComponent
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
    OneItemService,
    AddService,
    EditService,
    DeleteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
