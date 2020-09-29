import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListBook } from '../model/listBook.model';
import { BookComponent } from '../book/book.component';
import { ListBookService } from '../services/list-book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  states: any = [];
  maritalStatus: any = [];
  degreeOfRelation: any = [];
  profiles: any = [];
  prospectStatus: any = [];
  constructor(
    public dialogRef: MatDialogRef<BookComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private listBookService: ListBookService
  ) {
    this.dialogRef.disableClose = true;
  }

  formData: ListBook;

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      prospectName: [null, [Validators.required, Validators.maxLength(50)]],
      age: [null, [Validators.required, Validators.min(18), Validators.max(100)]],
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
      stateName: [null, [Validators.required]],
      maritalStatusName: [null, [Validators.required]],
      occupation: [null, [Validators.required, Validators.maxLength(25)]],
      income: [null, [Validators.required]],
      relation: [null, [Validators.required]],
      degreeOfRelationName: [null, [Validators.required]],
      profileName: [null, [Validators.required]],
      remarks: [null, [Validators.required]],
      prospectStatusName: ['1', [Validators.required]],
    });
    if (this.data.prospect) {
      this.initDialog(this.data.prospect);
    }

    this.listBookService.getStates().subscribe(statesData => {
      this.states = statesData;
    });
    this.listBookService.getMaritalStatus().subscribe(maritalStatus => {
      this.maritalStatus = maritalStatus;
    });

    this.listBookService.getDegreeOfRelation().subscribe(degreeOfRelation => {
      this.degreeOfRelation = degreeOfRelation;
    });

    this.listBookService.getProspectProfile().subscribe(prospectProfiles => {
      this.profiles = prospectProfiles;
    });

    this.listBookService.getProspectStatus().subscribe(prospectStatus => {
      this.prospectStatus = prospectStatus;
    });
  }

  initDialog(data: ListBook) {
    this.addBookForm.setValue({
      prospectName: data.prospectName,
      age: data.age,
      mobile: data.mobile,
      city: data.city,
      stateName: data.stateId,
      maritalStatusName: data.maritalStatusId,
      occupation: data.occupation,
      income: data.income,
      relation: data.relation,
      degreeOfRelationName: data.degreeOfRelationId,
      profileName: data.profileId,
      remarks: data.remarks,
      prospectStatusName: data.prospectStatusId,
    });
    this.addBookForm.updateValueAndValidity();
    console.log(data);
  }

  addBook() {
    debugger;
    if (!this.addBookForm.valid) {
      return;
    }
    const prospect = this.data.prospect;
    let prospectId;
    if (prospect) {
      prospectId = prospect.id;
    } else {
      prospectId = 0;
    }

    this.formData = {
      id: prospectId,
      prospectName: this.addBookForm.controls.prospectName.value,
      age: this.addBookForm.controls.age.value,
      mobile: this.addBookForm.controls.mobile.value,
      city: this.addBookForm.controls.city.value,
      stateId: this.addBookForm.controls.stateName.value,
      maritalStatusId: this.addBookForm.controls.maritalStatusName.value,
      occupation: this.addBookForm.controls.occupation.value,
      income: this.addBookForm.controls.income.value,
      relation: this.addBookForm.controls.relation.value,
      degreeOfRelationId: this.addBookForm.controls.degreeOfRelationName.value,
      profileId: this.addBookForm.controls.profileName.value,
      remarks: this.addBookForm.controls.remarks.value,
      prospectStatusId: this.addBookForm.controls.prospectStatusName.value,
    };
    if (prospect) {
      this.listBookService.updateListBook(this.formData).subscribe(response => {
        console.log(response);
        this.closeDialog();
      });
    } else {
      this.listBookService.addListBook(this.formData).subscribe(response => {
        console.log(response);
        this.closeDialog();
      });
    }
  }

  closeDialog() {
    this.dialogRef.close(this.formData);
  }
}
