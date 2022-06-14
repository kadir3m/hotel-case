import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/service/hotel.service';
import { ModalService } from 'src/app/service/modal.service';

import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit, OnDestroy {
  hotelList: Array<IHotel> = [];
  config: any;
  hotelListSubscriber: Subscription = new Subscription();
  constructor(
    private router: Router,
    private hotelService: HotelService,
    private modalService: ModalService,
    private route: ActivatedRoute
  ) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 5
};

this.route.queryParamMap.pipe(
  map(params => params.get('page'))
).subscribe(page => this.config.currentPage = page);

this.hotelListSubscriber = this.hotelService.hotelListStream$.subscribe(data => {
  this.hotelList = data;
})
   }

  ngOnInit(): void {
    this.hotelList = this.hotelService.getHotelList();
console.log(this.hotelList)
  }
  goToAddHotelPage() {
this.router.navigateByUrl('/add-hotel');
console.log("kadir")
  }
  onAddHotel(e: any) {
   this.hotelService.setHotel(e)

  }
  pageChange(newPage: number) {
		this.router.navigate([''], { queryParams: { page: newPage } });
	}
  deleteHotel(hotel: any) {
    let modalConfig = {
      hotelInfo: hotel,
      message: 'silmek istediğinize emin misiniz',
      confirm: () => {
        this.hotelService.deleteHotel(hotel.id)
      }
    }
    this.modalService.openModal(modalConfig)
  }
  sortByPoint(sort: 'inc' | 'dec') {
    if (sort === 'inc') {
      this.hotelList.sort((a: any,b: any) => (a.point - b.point));
    } else {
      this.hotelList.sort((a: any,b: any) => (b.point - a.point));
    }
  }
  ngOnDestroy(): void {
    this.hotelListSubscriber.unsubscribe();
  }
}
