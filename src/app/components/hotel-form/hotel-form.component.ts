import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IHotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent implements OnInit {
  entity: IHotel = {};
  @Output() onAddHotel = new EventEmitter<any>();
  isAdded = false;
  constructor(
    private hotelService: HotelService
  ) { }

  ngOnInit(): void {
  }
  addHotel() {
    if (this.entity.name) {
      this.isAdded = true;
      this.hotelService.setHotel(JSON.parse(JSON.stringify(this.entity)));
      setTimeout(() => {
        this.entity = {};
        this.isAdded = false;
      }, 1000)
    }
  }
}
