import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhmLibComponent } from './ohm-lib.component';

describe('OhmLibComponent', () => {
  let component: OhmLibComponent;
  let fixture: ComponentFixture<OhmLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhmLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhmLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
