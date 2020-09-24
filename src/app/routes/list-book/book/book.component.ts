import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ListBookService } from '../services/list-book.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListBook } from '../model/listBook.model';
import { AddBookComponent } from '../add-book/add-book.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'index',
    'prospectName',
    'age',
    'mobile',
    'address',
    'maritalStatus',
    'occupation',
    'income',
    'relation',
    'degreeOfRelation',
    'profileName',
    'remarks',
    'prospectStatus',
    'actions',
  ];

  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private lbService: ListBookService
  ) {}
  ngOnInit(): void {
    this.lbService.getListBook().subscribe((book: ListBook) => {
      this.dataSource = book;
      console.log(this.dataSource);
    });
  }
  addBook() {
    this.openDialog(null, 'Add Prospect');
  }

  openDialog(bookData?: ListBook, dialogTitle?: string): void {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '520px',
      data: { title: dialogTitle, prospect: bookData ? bookData : null },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.refresh(result);
    });
  }

  editBook(index: number) {
    this.openDialog(this.dataSource.data[index], 'Edit Prospect');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  refresh(data) {
    if (data) {
      this.dataSource.data.push(data);
    }
    this.cdRef.detectChanges();
  }

  openDeleteDialog(index: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: { title: 'Delete', content: 'Are you sure you want to delete this prospect?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh(result);
    });
  }
}
