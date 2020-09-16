import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListBook } from '../model/listBook.model';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  states = [
    {
      key: 'Delhi',
      value: 'Delhi',
    },
    {
      key: 'Uttar Pradesh',
      value: 'Uttar Pradesh',
    },
  ];
  maritalStatus = ['Single', 'Married', 'Widowed', 'Separated', 'Divorced'];
  degreeOfRelation = ['Hot', 'Warm', 'Cold'];
  profiles = ['Above', 'Equal', 'Below'];
  status = ['New', 'Approaching', 'Rejected', 'Following up', 'Joined'];
  constructor(
    public dialogRef: MatDialogRef<BookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListBook,
    private fb: FormBuilder
  ) {}

  formData: ListBook;

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      prospectName: [null, [Validators.required, Validators.maxLength(50)]],
      age: [null, [Validators.required, Validators.min(18), Validators.max(99)]],
      mobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      city: [null, [Validators.required, Validators.maxLength(50)]],
      state: [null, [Validators.required]],
      maritalStatus: [null, [Validators.required]],
      occupation: [null, [Validators.required, Validators.maxLength(25)]],
      income: [null, [Validators.required]],
      relation: [null, [Validators.required]],
      degreeOfRelation: ['Above', [Validators.required]],
      profile: [null, [Validators.required]],
      remarks: [null, [Validators.required]],
      isWorking: [null, [Validators.required]],
      inNextTarget: [null, [Validators.required]],
      status: ['New', [Validators.required]],
    });
    if (this.data) {
      this.initDialog();
    }
  }

  initDialog() {
    this.addBookForm.setValue({
      prospectName: this.data.prospectName,
      age: this.data.age,
      mobile: this.data.mobile,
      city: this.data.city,
      state: this.data.state,
      maritalStatus: this.data.maritalStatus,
      occupation: this.data.occupation,
      income: this.data.income,
      relation: this.data.relation,
      degreeOfRelation: this.data.degreeOfRelation,
      profile: this.data.profile,
      remarks: this.data.remarks,
      isWorking: this.data.isWorking.toString(),
      inNextTarget: this.data.inNextTarget.toString(),
      status: this.data.status,
    });
    this.addBookForm.updateValueAndValidity();
    console.log(this.data);
  }

  addBook() {
    if (!this.addBookForm.valid) {
      return;
    }
    this.formData = {
      prospectName: this.addBookForm.controls.prospectName.value,
      age: this.addBookForm.controls.age.value,
      mobile: this.addBookForm.controls.mobile.value,
      city: this.addBookForm.controls.city.value,
      state: this.addBookForm.controls.state.value,
      maritalStatus: this.addBookForm.controls.maritalStatus.value,
      occupation: this.addBookForm.controls.occupation.value,
      income: this.addBookForm.controls.income.value,
      relation: this.addBookForm.controls.relation.value,
      degreeOfRelation: this.addBookForm.controls.degreeOfRelation.value,
      profile: this.addBookForm.controls.profile.value,
      remarks: this.addBookForm.controls.remarks.value,
      isWorking: this.addBookForm.controls.isWorking.value,
      inNextTarget: this.addBookForm.controls.inNextTarget.value,
      status: this.addBookForm.controls.status.value,
    };

    console.log(this.formData);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.formData);
  }
}
