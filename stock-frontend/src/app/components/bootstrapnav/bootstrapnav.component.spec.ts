import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapnavComponent } from './bootstrapnav.component';

describe('BootstrapnavComponent', () => {
  let component: BootstrapnavComponent;
  let fixture: ComponentFixture<BootstrapnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
