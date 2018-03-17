import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteLoanComponent } from './vote-loan.component';

describe('VoteLoanComponent', () => {
  let component: VoteLoanComponent;
  let fixture: ComponentFixture<VoteLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
