import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddBookComponent } from '../add-book/add-book.component';
import { ListBook } from '../model/listBook.model';
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
    'profile',
    'remarks',
    'isWorking',
    'inNextTarget',
    'status',
    'actions',
  ];

  dataSource = new MatTableDataSource<ListBook>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private cdRef: ChangeDetectorRef) {}

  addBook() {
    this.openDialog();
  }

  openDialog(bookData?: ListBook): void {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '520px',
      data: bookData ? bookData : null,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.refresh(result);
    });
  }

  editBook(index: number) {
    this.openDialog(this.dataSource.data[index]);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
}

const ELEMENT_DATA: ListBook[] = [
  {
    prospectName: 'Student 1',
    age: 28,
    mobile: 9999999999,
    city: 'Noida',
    state: 'Uttar Pradesh',
    maritalStatus: 'Single',
    occupation: 'Student',
    income: 50000,
    relation: 'Son',
    degreeOfRelation: 'Warm',
    profile: 'Above',
    remarks: '-',
    isWorking: false,
    inNextTarget: true,
    status: 'New',
  },
  {
    prospectName: 'Student 2',
    age: 28,
    mobile: 9999999999,
    city: 'Noida',
    state: 'Uttar Pradesh',
    maritalStatus: 'Single',
    occupation: 'Student',
    income: 50000,
    relation: 'Son',
    degreeOfRelation: 'Warm',
    profile: 'Above',
    remarks: '-',
    isWorking: false,
    inNextTarget: true,
    status: 'New',
  },
  {
    prospectName: 'Student 3',
    age: 28,
    mobile: 9999999999,
    city: 'Noida',
    state: 'Uttar Pradesh',
    maritalStatus: 'Single',
    occupation: 'Student',
    income: 50000,
    relation: 'Son',
    degreeOfRelation: 'Warm',
    profile: 'Above',
    remarks: '-',
    isWorking: false,
    inNextTarget: true,
    status: 'New',
  },
  {
    prospectName: 'Student 4',
    age: 28,
    mobile: 9999999999,
    city: 'Noida',
    state: 'Uttar Pradesh',
    maritalStatus: 'Single',
    occupation: 'Student',
    income: 50000,
    relation: 'Son',
    degreeOfRelation: 'Warm',
    profile: 'Above',
    remarks: '-',
    isWorking: false,
    inNextTarget: true,
    status: 'New',
  },
  {
    prospectName: 'Student 5',
    age: 28,
    mobile: 9999999999,
    city: 'Noida',
    state: 'Uttar Pradesh',
    maritalStatus: 'Single',
    occupation: 'Student',
    income: 50000,
    relation: 'Son',
    degreeOfRelation: 'Warm',
    profile: 'Above',
    remarks: '-',
    isWorking: false,
    inNextTarget: true,
    status: 'New',
  },
  {
    prospectName: 'Student 6',
    age: 28,
    mobile: 9999999999,
    city: 'Noida',
    state: 'Uttar Pradesh',
    maritalStatus: 'Single',
    occupation: 'Student',
    income: 50000,
    relation: 'Son',
    degreeOfRelation: 'Warm',
    profile: 'Above',
    remarks: '-',
    isWorking: false,
    inNextTarget: true,
    status: 'New',
  },
  {
    prospectName: 'Student 7',
    age: 28,
    mobile: 9999999999,
    city: 'Noida',
    state: 'Uttar Pradesh',
    maritalStatus: 'Single',
    occupation: 'Student',
    income: 50000,
    relation: 'Son',
    degreeOfRelation: 'Warm',
    profile: 'Above',
    remarks: '-',
    isWorking: false,
    inNextTarget: true,
    status: 'New',
  },
  {
    prospectName: 'Student 8',
    age: 28,
    mobile: 9999999999,
    city: 'Noida',
    state: 'Uttar Pradesh',
    maritalStatus: 'Single',
    occupation: 'Student',
    income: 50000,
    relation: 'Son',
    degreeOfRelation: 'Warm',
    profile: 'Above',
    remarks: '-',
    isWorking: false,
    inNextTarget: true,
    status: 'New',
  },
];
