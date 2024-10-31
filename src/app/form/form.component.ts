import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,  Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { error } from 'node:console';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  /* options = [
    { value: 'option1', label: 'option 1' },
    { value: 'option2', label: 'option 2' },
    { value: 'option3', label: 'option 3' },
  ]; */

  selectedOption: string = "";

  ngOnInit(): void {
    this.getType();
  }

  showPassword: boolean = false;
  password: string = '';

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  //accForm: FormGroup;
  accType: string[] = [];
  errorMessage = '';

  getType(): void {
    this.http.get<string[]>('http://127.0.0.1:8000/get-type').subscribe(
      (data) => {
        this.accType = data;
        console.log(data);
      },
      (error) => {
        this.errorMessage = 'Failed to load';
      }
    )
  }


  accForm: FormGroup;
  isFormValid: boolean = false;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.accForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
    });

    this.accForm.valueChanges.subscribe(() => {
      this.isFormValid = this.accForm.valid;
    });


  }

  onSubmit() {
    if (this.accForm.valid) {
      console.log('Form Submitted', this.accForm.value);
      this.router.navigate(['/confirm']);
    }
  }
}
