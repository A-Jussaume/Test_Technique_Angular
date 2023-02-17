import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  closeIcon = faXmark;

  isFormShowed = false;
  showForm() {
    !this.isFormShowed ? this.isFormShowed = true : this.isFormShowed = false;
  }

  person = {
    firstName: "",
    email: "",
  }
  submit(firstName: string, email: string) {
    console.log(`Prénom : ${firstName}, Email : ${email}`)
  }
}
