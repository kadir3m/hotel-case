import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/shared/modal/modal.component';
import { ModalUiComponent } from './components/shared/modal-ui/modal-ui.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HotelFormComponent,
    HotelCardComponent,
    ModalComponent,
    ModalUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
