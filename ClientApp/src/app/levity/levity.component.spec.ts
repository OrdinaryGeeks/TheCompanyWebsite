import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevityComponent } from './levity.component';

describe('LevityComponent', () => {
  let component: LevityComponent;
  let fixture: ComponentFixture<LevityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
