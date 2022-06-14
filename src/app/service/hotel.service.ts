import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IHotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotels: Array<IHotel> = [
    {id: 1, name: 'Voyage Hotel', point: 9.7, created_date: new Date()},
    {id: 2, name: 'Hilton', point: 8.5, created_date: new Date()},
    {id: 3, name: 'Anemon', point: 7.7, created_date: new Date()}
  ]
  private hotelListStream = new Subject<any>();
  hotelListStream$ = this.hotelListStream.asObservable();
  constructor() {
    this.setHotels();
  }

  setHotels() {
    this.hotels = this.hotels.sort((a: any, b: any) => (b.created_date - a.created_date))
    localStorage.setItem('hotelList', JSON.stringify(this.hotels));
    this.hotelListStream.next(this.hotels);

  }
  getHotelList(): IHotel[] {
    let item: any = localStorage.getItem('hotelList')
   return  JSON.parse(item);

  }
  setHotel(hotel: IHotel) {
    let arr: Array<any> = this.hotels.map(data => data.id);
    let id = Math.max(...arr) || 0
    hotel.id = id + 1;
    hotel.point = 0;
    hotel.created_date = new Date();
    this.hotels.push(hotel);
    this.setHotels();

  }
  deleteHotel(id: number) {
    const index = this.hotels.map(data => data.id).indexOf(id);
    if (index !== -1) {
      this.hotels.splice(index, 1)
    }
    this.setHotels()
  }
}
