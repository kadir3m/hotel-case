
import { ComponentRef, Injectable, ViewContainerRef } from "@angular/core";
import { Subject } from "rxjs";
import { ModalUiComponent } from "../components/shared/modal-ui/modal-ui.component";
import { ModalComponent } from "../components/shared/modal/modal.component";
import { HotelService } from "./hotel.service";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
   componentRef!: ComponentRef<ModalUiComponent>;
   private modalStream = new Subject<any>();
    modalStream$ = this.modalStream.asObservable();
  constructor(private hotelService: HotelService) {}

  openModal(modalConfig: {hotelInfo: any, message: any, confirm: any}) {
    this.modalStream.next({message: modalConfig.message, hotelInfo: modalConfig.hotelInfo, confirm: modalConfig.confirm})
  }

  
  closeModal(componentRefs:any) {
    componentRefs.destroy();

  }

  confirm(componentRefs:any) {

    componentRefs.destroy();

    // this.closeModal(componentRefs);
  }
}