import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal-ui',
  templateUrl: './modal-ui.component.html',
  styleUrls: ['./modal-ui.component.scss']
})
export class ModalUiComponent implements OnInit {
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();
  @Output() openModalEvent = new EventEmitter();
  @Input() message: string = '';
  @Input() hotelInfo: any;
  constructor(private modalService: ModalService) { 

  }

  ngOnInit(): void {
    console.log("message => ", this.message)
  }
  accept() {
    this.confirmEvent.next(true);
  }
  deny() {
    this.closeMeEvent.next(true);
  }
}
