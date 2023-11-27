import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordBuildComponent } from './crossword-build.component';

describe('CrosswordBuildComponent', () => {
  let component: CrosswordBuildComponent;
  let fixture: ComponentFixture<CrosswordBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrosswordBuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrosswordBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
