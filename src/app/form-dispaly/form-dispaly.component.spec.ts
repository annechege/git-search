import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDispalyComponent } from './form-dispaly.component';

describe('FormDispalyComponent', () => {
  let component: FormDispalyComponent;
  let fixture: ComponentFixture<FormDispalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDispalyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
