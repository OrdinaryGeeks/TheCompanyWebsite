import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TWLSidebarComponent } from './twlsidebar.component';

describe('TWLSidebarComponent', () => {
  let component: TWLSidebarComponent;
  let fixture: ComponentFixture<TWLSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TWLSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TWLSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
