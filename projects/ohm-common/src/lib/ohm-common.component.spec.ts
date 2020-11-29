import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhmCommonComponent } from './ohm-common.component';

describe('OhmCommonComponent', () => {
  let component: OhmCommonComponent;
  let fixture: ComponentFixture<OhmCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhmCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhmCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
