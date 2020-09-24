import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookSettingsComponent } from './list-book-settings.component';

describe('ListBookSettingsComponent', () => {
  let component: ListBookSettingsComponent;
  let fixture: ComponentFixture<ListBookSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBookSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
