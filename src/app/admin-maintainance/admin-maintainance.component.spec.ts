import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMaintainanceComponent } from './admin-maintainance.component';

describe('AdminMaintainanceComponent', () => {
  let component: AdminMaintainanceComponent;
  let fixture: ComponentFixture<AdminMaintainanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMaintainanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
