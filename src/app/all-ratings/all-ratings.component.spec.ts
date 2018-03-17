import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRatingsComponent } from './all-ratings.component';

describe('AllRatingsComponent', () => {
  let component: AllRatingsComponent;
  let fixture: ComponentFixture<AllRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
