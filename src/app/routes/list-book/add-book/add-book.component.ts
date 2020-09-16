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
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder
  ) {
    this.dialogRef.disableClose = true;
  }

  formData: ListBook;

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      prospectName: [null, [Validators.required, Validators.maxLength(50)]],
      age: [null, [Validators.required, Validators.min(18), Validators.max(99)]],
      mobile: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      city: [null, [Validators.required, Validators.maxLength(50)]],
      state: [null, [Validators.required]],
      maritalStatus: [null, [Validators.required]],
      occupation: [null, [Validators.required, Validators.maxLength(25)]],
      income: [null, [Validators.required]],
      relation: [null, [Validators.required]],
      degreeOfRelation: [null, [Validators.required]],
      profile: [null, [Validators.required]],
      remarks: [null, [Validators.required]],
      isWorking: [null, [Validators.required]],
      inNextTarget: [null, [Validators.required]],
      status: ['New', [Validators.required]],
    });
    if (this.data.prospect) {
      this.initDialog(this.data.prospect);
    }
  }

  getErrorMessage() {
    if (this.addBookForm.controls.prospectName.hasError('required')) {
      return 'You must enter a value';
    }
  }

  initDialog(data: ListBook) {
    this.addBookForm.setValue({
      prospectName: data.prospectName,
      age: data.age,
      mobile: data.mobile,
      city: data.city,
      state: data.state,
      maritalStatus: data.maritalStatus,
      occupation: data.occupation,
      income: data.income,
      relation: data.relation,
      degreeOfRelation: data.degreeOfRelation,
      profile: data.profile,
      remarks: data.remarks,
      isWorking: (data.isWorking).toString(),
      inNextTarget: (data.inNextTarget).toString(),
      status: data.status,
    });
    this.addBookForm.updateValueAndValidity();
    console.log(data);
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
