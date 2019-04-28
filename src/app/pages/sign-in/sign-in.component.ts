import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {MatButton} from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  // COMPONENT PROPERTIES --------------------------
  signInForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.setSignInForm();

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // GET -> RETURN THE USERNAME CONTROL INTO THE SIGN IN FORM
  get usernameFormControl(): FormControl {
    return this.signInForm.get('username') as FormControl;
  }

  // GET -> RETURN THE PASSWORD CONTROL INTO THE SIGN IN FORM
  get passwordFormControl(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  // METHOD -> SET THE INITIAL VALUE OF THE FORM GROUP
  setSignInForm(): void {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.warn('XXXXX');
    this.submitted = true;
    this.error = null;

    // stop here if form is invalid
    if (this.signInForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.usernameFormControl.value, this.passwordFormControl.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

} // COMPONENT ENDS
