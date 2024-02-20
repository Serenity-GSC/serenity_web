import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSource = new Subject<any>();
  notification = this.notificationSource.asObservable();

  showSuccess(message: string): void {
    this.notificationSource.next({ isVisible: true, message });
  }
}
