import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullListingsComponent } from './full-listings.component';

describe('FullListingsComponent', () => {
  let component: FullListingsComponent;
  let fixture: ComponentFixture<FullListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullListingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
