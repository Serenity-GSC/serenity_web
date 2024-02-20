import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  constructor(private notificationService: NotificationService) { }

  public sendEmail(e: Event) {
    e.preventDefault();
    console.log(e.target as HTMLFormElement);
    emailjs
    .sendForm(
      'serenity_contactus', 
      'template_0mec3ea', 
      e.target as HTMLFormElement, {
          publicKey: '_h4TzUACZS_bJ8p3g',
        })
        .then(()=>{
          // Show success notification
          this.notificationService.showSuccess('Email sent successfully!');
          console.log('Email sent successfully!');
        }, (error) => {
          console.error('Email sent failed:', error);
        });
      }
}

// emailjs.send("serenity_contactus","template_0mec3ea",{
//   subject: "New Goals",
//   first_name: "Muhammad",
//   last_name: "Arkan",
//   message: "I want to inform you about a new deals",
//   email: "jokerlex30@gmail.com",
//   });