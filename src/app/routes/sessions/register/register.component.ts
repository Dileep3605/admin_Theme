import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CustomValidators } from '@shared/components/customValidators';

function emailDomainValidator(control: FormControl) {
  const email = control.value;
  if (email && email.indexOf('@') !== -1) {
    // const [_, domain] = email.split('@');
    // if (domain !== 'codecraft.tv') {
    //   return {
    //     emailDomain: {
    //       parsedDomain: domain,
    //     },
    //   };
    // }
  }
  return null;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  companyDropdoenValues: CompanyDropdown[] = [];

  constructor(private fb: FormBuilder, public fdService: AuthService) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, emailDomainValidator]],
      companyName: ['', Validators.required],
      uniqueId: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [this.confirmValidator]],
      termsOfUse: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.fdService.getCompanyValues().subscribe(
      (companyVal: any[]) => {
        this.companyDropdoenValues = companyVal;
      },
      error => {
        console.error(`Error in Company Value Fetching ${error}`);
      },
      () => {}
    );
  }

  confirmValidator = (control: FormControl): { [k: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { error: true, confirm: true };
    }
    return {};
  };

  emailValidator = (control: FormControl): { [k: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    }
    return {};
  };
}

export interface CompanyDropdown {
  id: number;
  companyName: string;
  shortName: string;
}
