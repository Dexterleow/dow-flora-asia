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
  // name: string;
  // email: string;
  // message: string;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.createContactForm();
  }

  ngOnInit() {
    // this.name = '';
    // this.email = '';
    // this.message = '';
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      message: ['', Validators.required ]
    });
  }

  submitEnquiry() {
    console.log(this.contactForm);

  // this.emailService.sendEmail(this.contactForm).subscribe(dataReturned => {

      // if (dataReturned.status) {
      //   this.contactForm.reset();
      //   this.emailOutcomeMsg = 'Thanks for your interest in our services. We have successfully recieved your enquiry. We will get back to you as soon as possible.';
      // } else {
      //   this.submitButton = true;
      //   this.emailOutcomeMsg = 'Seems like an error occurred. Please try again.';
      // }
      // this.dropdownSelected = 'Please Choose One';
    });
  }

}
