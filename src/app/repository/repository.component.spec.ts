import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryHttpComponent } from './repository-http.component';

describe('RepositoryHttpComponent', () => {
  let component: RepositoryHttpComponent;
  let fixture: ComponentFixture<RepositoryHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
