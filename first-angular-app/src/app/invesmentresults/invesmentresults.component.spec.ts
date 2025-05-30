import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesmentresultsComponent } from './invesmentresults.component';

describe('InvesmentresultsComponent', () => {
  let component: InvesmentresultsComponent;
  let fixture: ComponentFixture<InvesmentresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvesmentresultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvesmentresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
