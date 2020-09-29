import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { ListBookService } from '../services/list-book.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListBook, ListBookSettings } from '../model/listBook.model';
import { AddBookComponent } from '../add-book/add-book.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { DataSource } from '@angular/cdk/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    'index',
    'prospectName',
    'age',
    'mobile',
    'address',
    'maritalStatusName',
    'occupation',
    'income',
    'relation',
    'degreeOfRelationName',
    'profileName',
    'remarks',
    'prospectStatusName',
    'actions',
  ];

  dataSource: MatTableDataSource<ListBook>;
  pageIndex = 0;
  pageLength = 10;
  listBookSettings: ListBookSettings;
  listBookSettingsSubscription: Subscription;
  listBookSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private lbService: ListBookService
  ) {}

  ngOnInit(): void {
    this.listBookSubscription = this.lbService
      .getListBook(this.pageIndex, this.pageLength)
      .subscribe(
        (book: any) => {
          const tableDataSource = book;
          this.dataSource = new MatTableDataSource(tableDataSource);
          console.log(this.dataSource);
        },
        error => {
          console.error(`Error in getListBook Data Fetching - ${error}`);
        },
        () => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );

    this.listBookSettingsSubscription = this.lbService.getListBookSettings().subscribe(settings => {
      this.listBookSettings = settings;
    });
  }
  addProspect() {
    this.openDialog(null, 'Add Prospect');
  }

  exportToExcel() {}

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

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  refresh(data) {
    this.cdRef.detectChanges();
  }

  openDeleteDialog(index: number, data: ListBook) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: {
        title: 'Delete',
        content: 'Are you sure you want to delete this prospect?',
        prospect: data,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh(result);
    });
  }
  
  ngOnDestroy(): void {
    this.listBookSettingsSubscription.unsubscribe();
    this.listBookSubscription.unsubscribe();
  }
}
