import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  isLoading = false;

  constructor(public authService: AuthService) {}

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.registerUser(form.value.first_name, form.value.last_name, form.value.email, form.value.designation, form.value.mobile, form.value.password, form.value.gender, form.value.collegename);
  }
}



