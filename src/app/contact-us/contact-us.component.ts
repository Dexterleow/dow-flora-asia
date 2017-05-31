import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailService } from '../shared/services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.createContactForm();
  }

  ngOnInit() {
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      message: ['', Validators.required ]
    });
  }

  submitEnquiry() {
    let name = this.contactForm.value.name;
    let email = this.contactForm.value.email;
    let message = this.contactForm.value.email;
    this.emailService.sendEmail(name, email, message).subscribe(dataReturned => {
    // this.emailService.sendEmail(this.contactForm).subscribe(dataReturned => {
      if (dataReturned.status) {
        this.contactForm.reset();
      } else {
        // this.submitButton = true;
      }
    });
  }

}
