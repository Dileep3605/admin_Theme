import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-book-settings',
  templateUrl: './list-book-settings.component.html',
  styleUrls: ['./list-book-settings.component.scss'],
})
export class ListBookSettingsComponent implements OnInit {
  listbookSettings: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.listbookSettings = this.fb.group({
      shareMobileNo: [true],
      exportToExcel: [true],
      showDownloadFormat: [true],
    });
  }
}
