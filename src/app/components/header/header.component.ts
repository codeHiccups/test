import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DatePipe],
})
export class HeaderComponent implements OnInit {
  currentDate: string = '';
  currentTime: string = '';

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000); // Update every second (1000 milliseconds)
  }

  private updateDateTime() {
    const now = new Date();
    this.currentDate = this.datePipe.transform(now, 'MM/dd/yyyy') || '';
    this.currentTime = this.datePipe.transform(now, 'HH:mm:ss') || '';
  }
}
