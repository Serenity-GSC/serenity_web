import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  isVisible: boolean = false;
  message: string = '';

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notification.subscribe((data) => {
      this.isVisible = data.isVisible;
      this.message = data.message;
      setTimeout(() => {
        this.isVisible = false; // Automatically hide the notification after a certain time
      }, 5000);
    });
  }
}
