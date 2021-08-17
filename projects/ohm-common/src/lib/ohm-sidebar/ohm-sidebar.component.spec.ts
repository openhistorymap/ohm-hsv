import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhmSidebarComponent } from './ohm-sidebar.component';

describe('OhmSidebarComponent', () => {
  let component: OhmSidebarComponent;
  let fixture: ComponentFixture<OhmSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhmSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhmSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
