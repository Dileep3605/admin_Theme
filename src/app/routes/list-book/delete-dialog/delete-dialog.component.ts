import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookComponent } from '../book/book.component';
import { ListBook } from '../model/listBook.model';
import { ListBookService } from '../services/list-book.service';

export interface DialogData {
  title: string;
  content: string;
  prospect: ListBook;
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private listBookService: ListBookService
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {}

  deleteProspect() {
    this.listBookService.deleteListBook(this.data.prospect);
  }
}
