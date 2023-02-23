import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllEventComponent } from './list-all-event.component';

describe('ListAllEventComponent', () => {
  let component: ListAllEventComponent;
  let fixture: ComponentFixture<ListAllEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
