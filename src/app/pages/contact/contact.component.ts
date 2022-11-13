import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmit = true;
  submitMessage = '';


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      subject: ['', Validators.required],

    })
  }

  submitData(value: any) {

    this.isSubmit = true;

    this.submitMessage = 'Envoyé avec succès';
    setTimeout(() => {
      this.isSubmit = false;
    }, 8000);

  }
}
