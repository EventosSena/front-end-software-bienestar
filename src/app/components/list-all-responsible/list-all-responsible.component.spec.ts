import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllResponsibleComponent } from './list-all-responsible.component';

describe('ListAllResponsibleComponent', () => {
  let component: ListAllResponsibleComponent;
  let fixture: ComponentFixture<ListAllResponsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllResponsibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
