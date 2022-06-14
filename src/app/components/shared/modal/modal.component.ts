import { Component, ComponentRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ModalService } from 'src/app/service/modal.service';
import { ModalUiComponent } from '../modal-ui/modal-ui.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() body: string = '';
  confirmFun: any;
  subscriber: Subscription = new Subscription();
  private componentRef!: ComponentRef<ModalUiComponent>;
  private componentSubscriber!: Subject<string>;
  @ViewChild('modal', { read: ViewContainerRef, static: false })
  entry!: ViewContainerRef;
  constructor(private modalService: ModalService,
    private vcRef: ViewContainerRef) { 
    this.entry
    this.subscriber = this.modalService.modalStream$.subscribe(data => {
      this.openModal(data.hotelInfo, data.message)
      this.confirmFun = data.confirm;
    console.log('Modal init');
      
    })
  }

  ngOnInit(): void {

  }

  closeMe() {

  }
  // confirm() {
  //   this.confirmEvent.emit();
  // } 
  openModal(hotelInfo: any, message: any) {
    this.componentRef = this.vcRef.createComponent(ModalUiComponent);
    this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
    this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
    this.componentRef.instance.message = message;
    this.componentRef.instance.hotelInfo = hotelInfo;
   
  }

  closeModal() {
   this.modalService.closeModal(this.componentRef);
    this.subscriber.unsubscribe();
    this.vcRef.createComponent(ModalComponent);
  }

  confirm() {
    this.confirmFun();
    this.modalService.confirm(this.componentRef);
    this.subscriber.unsubscribe();
    this.vcRef.createComponent(ModalComponent);
  }
 ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }

}
