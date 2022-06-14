import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';

const routes: Routes = [
  {
    path: '',
    component: HotelListComponent,
  },
  {
    path: 'add-hotel',
    component: HotelFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
