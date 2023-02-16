import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllAprendizComponent } from './list-all-aprendiz.component';

describe('ListAllAprendizComponent', () => {
  let component: ListAllAprendizComponent;
  let fixture: ComponentFixture<ListAllAprendizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllAprendizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
