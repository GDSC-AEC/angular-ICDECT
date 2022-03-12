import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsessionsComponent } from './specialsessions.component';

describe('SpecialsessionsComponent', () => {
  let component: SpecialsessionsComponent;
  let fixture: ComponentFixture<SpecialsessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialsessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
