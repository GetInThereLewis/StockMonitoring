import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListingRestrictedComponent } from './add-listing-restricted.component';

describe('AddListingRestrictedComponent', () => {
  let component: AddListingRestrictedComponent;
  let fixture: ComponentFixture<AddListingRestrictedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListingRestrictedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListingRestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
