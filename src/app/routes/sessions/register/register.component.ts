import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FetchingDataService } from '@shared/services/fetching-data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  companyDropdoenValues: CompanyDropdown[] = [];

  constructor(private fb: FormBuilder, public fdService: FetchingDataService) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      companyName: ['', Validators.required],
      uniqueId: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [this.confirmValidator]],
      termsOfUse: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.fdService.getCompanyValues().subscribe(
      (companyVal: CompanyDropdown[]) => {
        this.companyDropdoenValues = companyVal;
      },
      error => {
        console.log(`Error in Company Value Fetching ${error}`);
      },
      () => {
        console.log(this.companyDropdoenValues);
      }
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
}

export interface CompanyDropdown {
  id: number;
  companyName: string;
  shortName: string;
}
