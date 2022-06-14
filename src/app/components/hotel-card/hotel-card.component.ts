import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from 'src/app/models/hotel.model';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {
@Input() hotelInfo: IHotel = {};
@Output() hotelCardPoint= new EventEmitter<number>();
@Output() onDeleteEmitter= new EventEmitter<IHotel>();
counter = 1;
  constructor() { }

  ngOnInit(): void {
  }
  changePoint(value: 'inc' | 'dec') {

      if (value === 'inc') {
        if (this.hotelInfo.point !== undefined  && this.hotelInfo.point < 10) {
          this.hotelInfo.point =  Math.round(((this.hotelInfo.point + 1) + Number.EPSILON) * 100) / 100
          this.hotelInfo.point > 10 && (this.hotelInfo.point = 10);
          Math.round((this.hotelInfo.point + Number.EPSILON) * 100) / 100
        }
      }
      if (value === 'dec') {
        if (this.hotelInfo.point !== undefined  &&   this.hotelInfo.point  > 0) {
          this.hotelInfo.point =  Math.round(((this.hotelInfo.point - 1) + Number.EPSILON) * 100) / 100

          this.hotelInfo.point < 0 && (this.hotelInfo.point = 0);
        }
      }

  }
  onDelete() {
this.onDeleteEmitter.emit(this.hotelInfo);
  }
}
