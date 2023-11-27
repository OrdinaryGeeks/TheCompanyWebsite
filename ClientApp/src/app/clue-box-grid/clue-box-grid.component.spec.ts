import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClueBoxGridComponent } from './clue-box-grid.component';

describe('ClueBoxGridComponent', () => {
  let component: ClueBoxGridComponent;
  let fixture: ComponentFixture<ClueBoxGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClueBoxGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClueBoxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
