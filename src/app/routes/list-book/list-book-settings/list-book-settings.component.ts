import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListBookService } from '../services/list-book.service';
import { ListBookSettings } from '../model/listBook.model';
@Component({
  selector: 'app-list-book-settings',
  templateUrl: './list-book-settings.component.html',
  styleUrls: ['./list-book-settings.component.scss'],
})
export class ListBookSettingsComponent implements OnInit {
  listbookSettings: FormGroup;
  listBookSettingsRemote: ListBookSettings;
  constructor(private fb: FormBuilder, private listBookService: ListBookService) {}

  ngOnInit(): void {
    this.listBookService.getListBookSettings().subscribe(
      (response: any) => {
        this.listBookSettingsRemote = response;
      },
      error => {
        console.error(`Error in fetching ListBookSettings ${error}`);
      },
      () => {
        this.initListBookSettings();
      }
    );
    this.listbookSettings = this.fb.group({
      isDownloadExcelFormat: [null],
      isExportExcel: [null],
      isMaskedMobile: [null],
    });
    this.listbookSettings.valueChanges.subscribe(value => {
      this.saveListBookSettings();
    });
  }

  initListBookSettings() {
    this.listbookSettings.setValue({
      isDownloadExcelFormat: this.listBookSettingsRemote.isDownloadExcelFormat,
      isExportExcel: this.listBookSettingsRemote.isExportExcel,
      isMaskedMobile: this.listBookSettingsRemote.isMaskedMobile,
    });
    this.listbookSettings.updateValueAndValidity();
  }

  saveListBookSettings() {
    const isDownloadExcelFormat = this.listbookSettings.get('isDownloadExcelFormat').value;
    const isExportExcel = this.listbookSettings.get('isExportExcel').value;
    const isMaskedMobile = this.listbookSettings.get('isMaskedMobile').value;
    this.listBookService
      .updateListBookSettings(
        this.listBookSettingsRemote.id,
        isDownloadExcelFormat,
        isExportExcel,
        isMaskedMobile,
        this.listBookSettingsRemote.userName
      )
      .subscribe(response => {
        console.log(response);
      });
  }
}
