import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisterEventComponent } from './resgister-event.component';

describe('ResgisterEventComponent', () => {
  let component: ResgisterEventComponent;
  let fixture: ComponentFixture<ResgisterEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgisterEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgisterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
