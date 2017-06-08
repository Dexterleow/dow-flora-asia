import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailService } from '../shared/services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  showSubmitButton: boolean;
  processingEnquiryStatus: boolean;
  processingEnquiryMessage: string;

  public lat: number;
  public lng: number;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.createContactForm();
  }

  ngOnInit() {
    this.showSubmitButton = true;
    this.processingEnquiryStatus = false;

    this.lat = 1.397741;
    this.lng = 103.865757;
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      message: ['', Validators.required ]
    });
  }

  submitEnquiry() {
    this.showSubmitButton = false;
    this.processingEnquiryStatus = true;
    this.processingEnquiryMessage = 'We are processing your enquiry!';

    let name = this.contactForm.value.name;
    let email = this.contactForm.value.email;
    let message = this.contactForm.value.email;

    this.emailService.sendEmail(name, email, message).subscribe(dataReturned => {
      if (dataReturned.status) {
        this.processingEnquiryMessage = 'We have succesfully received your enquiry and will get back to you as soon as possible.';
        this.contactForm.reset();
      } else {
        this.showSubmitButton = true;
        this.processingEnquiryMessage = 'Seems like an error occurred. Please try sending your enquiry again.';
      }
    });
  }



}
