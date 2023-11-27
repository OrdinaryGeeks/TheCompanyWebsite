import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterBoxGridComponent } from './letter-box-grid.component';

describe('LetterBoxGridComponent', () => {
  let component: LetterBoxGridComponent;
  let fixture: ComponentFixture<LetterBoxGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterBoxGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterBoxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
