import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ListBook, ListBookSettings } from '../model/listBook.model';

@Injectable({
  providedIn: 'root',
})
export class ListBookService {
  constructor(public _httpClient: HttpClient) {}

  getListBook(pageIndex: number, pageLength: number) {
    const url = `/api/ListBook/?userName=8130331002?pageNo=${pageIndex}?pageLength=${pageLength}`;
    return this._httpClient.get<ListBook>(url);
  }

  addListBook(listBook: ListBook) {
    const url = `/api/ListBook`;
    const body = {
      id: listBook.id,
      prospectName: listBook.prospectName,
      age: listBook.age,
      mobile: listBook.mobile,
      city: listBook.city,
      stateId: listBook.stateId,
      maritalStatusId: listBook.maritalStatusId,
      occupation: listBook.occupation,
      income: listBook.income,
      relation: listBook.relation,
      degreeOfRelationId: listBook.degreeOfRelationId,
      profileId: listBook.profileId,
      remarks: listBook.remarks
    };
    return this._httpClient.post(url, body);
  }

  updateListBook(listBook: ListBook) {
    const url = `/api/ListBook`;
    const body = {
      id: listBook.id,
      prospectName: listBook.prospectName,
      age: listBook.age,
      mobile: listBook.mobile,
      city: listBook.city,
      stateId: listBook.stateId,
      maritalStatusId: listBook.maritalStatusId,
      occupation: listBook.occupation,
      income: listBook.income,
      relation: listBook.relation,
      degreeOfRelationId: listBook.degreeOfRelationId,
      profileId: listBook.profileId,
      remarks: listBook.remarks,
      prospectStatusId: listBook.prospectStatusId,
    };
    return this._httpClient.put(url, body);
  }

  deleteListBook(listBook: ListBook) {
    const url = `/api/ListBook/?id=${listBook.id}`;
    return this._httpClient.delete(url);
  }

  getDegreeOfRelation() {
    const url = `/api/ListBook/DegreeOfRelation`;
    return this._httpClient.get<ListBook>(url);
  }

  getListBookSettings() {
    const url = `/api/ListBook/Settings`;
    return this._httpClient.get<ListBookSettings>(url);
  }

  updateListBookSettings(
    userId: number,
    downloadExcelFormat: boolean,
    exportExcel: boolean,
    maskedMobile: boolean,
    username: string
  ) {
    const url = `/api/ListBook/Settings`;
    const body = {
      id: userId,
      isDownloadExcelFormat: downloadExcelFormat,
      isExportExcel: exportExcel,
      isMaskedMobile: maskedMobile,
      userName: username,
    };
    return this._httpClient.post(url, body);
  }

  getMaritalStatus() {
    const url = `/api/ListBook/MaritalStatus`;
    return this._httpClient.get<ListBook>(url);
  }

  getStates() {
    const url = `/api/State`;
    return this._httpClient.get<ListBook>(url);
  }

  getProspectProfile() {
    const url = `/api/ListBook/ProspectProfile`;
    return this._httpClient.get<ListBook>(url);
  }

  getProspectStatus() {
    const url = `/api/ListBook/ProspectStatus`;
    return this._httpClient.get<ListBook>(url);
  }

  getExportToExcel() {
    const url = `/api/ListBook/ExportToExcel`;
    return this._httpClient.get<ListBook>(url);
  }
}
