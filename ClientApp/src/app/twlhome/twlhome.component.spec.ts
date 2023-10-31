import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TWLHomeComponent } from './twlhome.component';

describe('TWLHomeComponent', () => {
  let component: TWLHomeComponent;
  let fixture: ComponentFixture<TWLHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TWLHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TWLHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
