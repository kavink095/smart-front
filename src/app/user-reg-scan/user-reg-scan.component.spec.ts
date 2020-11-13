import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegScanComponent } from './user-reg-scan.component';

describe('UserRegScanComponent', () => {
  let component: UserRegScanComponent;
  let fixture: ComponentFixture<UserRegScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
