export class ListBook {
  id?: string;
  prospectName: string;
  age: number;
  mobile: number;
  city: string;
  stateId?: number;
  stateName?: string;
  maritalStatusId?: number;
  maritalStatusName?: string;
  occupation: string;
  income: string | number;
  relation: string;
  degreeOfRelationId?: number;
  degreeOfRelationName?: string;
  profileId?: number;
  profileName?: string;
  remarks: string;
  prospectStatusId?: string;
  prospectStatusName?: string;
}

export interface ListBookSettings {
  id: number;
  isDownloadExcelFormat: boolean;
  isExportExcel: boolean;
  isMaskedMobile: boolean;
  userName: string;
}
