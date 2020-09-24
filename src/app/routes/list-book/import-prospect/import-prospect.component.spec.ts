import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProspectComponent } from './import-prospect.component';

describe('ImportProspectComponent', () => {
  let component: ImportProspectComponent;
  let fixture: ComponentFixture<ImportProspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportProspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
