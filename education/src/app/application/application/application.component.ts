import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../application.service";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent {
  isLoading = false;

  constructor(public authService: AuthService) {}

  onApplication(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.applicationUser(form.value.first_name, form.value.last_name, form.value.email, form.value.applied_position, form.value.contact_number, form.value.gender, form.value.resume);
  }
}



