import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userArray: User[] = [];
  givenUsername = '';
  givenEmail = '';
  givenSecret = '';
  givenAnswer = '';

  displayForm = true;
  submitted = false;
  finalized = false;

  finalUsername = '';
  finalEmail = '';
  finalSecret = '';
  finalAnswer = '';

  constructor() {
    this.userArray.push({
      name: 'John Doe',
      email: 'John_Doe@gmail.com',
    });

    this.userArray.push({
      name: 'Jane Doe',
      email: 'JaneD@hotmail.com',
    });
  }

  onSubmit(form: NgForm) {
    this.givenUsername = form.value.username;
    this.givenEmail = form.value.email;
    if (form.value.secret === 'pet') {
      this.givenSecret = 'Your first pet?';
    } else {
      this.givenSecret = 'Your first teacher?';
    }
    this.givenAnswer = form.value.questionAnswer;

    this.submitted = true;
    this.displayForm = false;
  }

  confirm() {
    this.finalUsername = this.givenUsername;
    this.finalEmail = this.givenEmail;
    this.finalSecret = this.givenSecret;
    this.finalAnswer = this.givenAnswer;

    this.givenUsername = '';
    this.givenEmail = '';
    this.givenSecret = '';
    this.givenAnswer = '';

    this.submitted = false;
    this.finalized = true;

    this.userArray.push({
      name: this.finalUsername,
      email: this.finalEmail,
    });
  }

  back() {
    this.finalized = false;
    this.displayForm = true;
  }
}
