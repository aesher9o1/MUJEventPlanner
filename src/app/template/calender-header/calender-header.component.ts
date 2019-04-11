import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-calender-header',
  templateUrl: './calender-header.component.html',
  styleUrls: ['./calender-header.component.css']
})
export class CalenderHeaderComponent {

  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

}
