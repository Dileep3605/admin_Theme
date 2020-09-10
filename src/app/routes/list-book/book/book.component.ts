import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'age',
    'mobile',
    'address',
    'maritalStatus',
    'relation',
    'degreeOfRelation',
    'occupation',
    'income',
    'profile',
    'remark',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  age: number;
  mobile: number;
  address: string;
  maritalStatus: string;
  relation: string;
  degreeOfRelation: string;
  occupation: string;
  income: string;
  profile: string;
  remark: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Student 1',
    position: 1,
    age: 24,
    mobile: 9999999999,
    address: 'West UK',
    maritalStatus: 'Single',
    relation: 'Son',
    degreeOfRelation: 'Warm',
    occupation: 'Student',
    income: '50000',
    profile: 'blank',
    remark: 'blank',
    action: '',
  },
  {
    name: 'Student 2',
    position: 2,
    age: 26,
    mobile: 9999999999,
    address: 'West UK',
    maritalStatus: 'Single',
    relation: 'Son',
    degreeOfRelation: 'Warm',
    occupation: 'Student',
    income: '50000',
    profile: 'blank',
    remark: 'blank',
    action: '',
  },
  {
    name: 'Student 3',
    position: 3,
    age: 22,
    mobile: 9999999999,
    address: 'West UK',
    maritalStatus: 'Single',
    relation: 'Son',
    degreeOfRelation: 'Warm',
    occupation: 'Student',
    income: '50000',
    profile: 'blank',
    remark: 'blank',
    action: '',
  },
  {
    name: 'Student 4',
    position: 4,
    age: 21,
    mobile: 9999999999,
    address: 'West UK',
    maritalStatus: 'Single',
    relation: 'Son',
    degreeOfRelation: 'Warm',
    occupation: 'Student',
    income: '50000',
    profile: 'blank',
    remark: 'blank',
    action: '',
  },
  {
    name: 'Student 5',
    position: 5,
    age: 24,
    mobile: 9999999999,
    address: 'West UK',
    maritalStatus: 'Single',
    relation: 'Son',
    degreeOfRelation: 'Warm',
    occupation: 'Student',
    income: '50000',
    profile: 'blank',
    remark: 'blank',
    action: '',
  },
  {
    name: 'Student 6',
    position: 6,
    age: 26,
    mobile: 9999999999,
    address: 'West UK',
    maritalStatus: 'Single',
    relation: 'Son',
    degreeOfRelation: 'Warm',
    occupation: 'Student',
    income: '50000',
    profile: 'blank',
    remark: 'blank',
    action: '',
  },
  {
    name: 'Student 7',
    position: 7,
    age: 27,
    mobile: 9999999999,
    address: 'West UK',
    maritalStatus: 'Single',
    relation: 'Son',
    degreeOfRelation: 'Warm',
    occupation: 'Student',
    income: '50000',
    profile: 'blank',
    remark: 'blank',
    action: '',
  },
  {
    name: 'Student 8',
    position: 8,
    age: 20,
    mobile: 9999999999,
    address: 'West UK',
    maritalStatus: 'Single',
    relation: 'Son',
    degreeOfRelation: 'Warm',
    occupation: 'Student',
    income: '50000',
    profile: 'blank',
    remark: 'blank',
    action: '',
  },
];
