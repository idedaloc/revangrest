import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsComponent } from './appointments.component';
import { AppointmentsService } from './appointments.service';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('AppointmentsComponent', () => {
  let component: AppointmentsComponent;
  let fixture: ComponentFixture<AppointmentsComponent>;

  const spy = jasmine.createSpyObj('AppointmentsService',['getAppointments']);

  beforeEach(() => TestBed.configureTestingModule({ 
    declarations: [ AppointmentsComponent ],
    imports: [ FormsModule, RouterModule.forRoot([])],
    providers: [{ provide: AppointmentsService, useValue: spy }, { provide: APP_BASE_HREF, useValue: '/display'}]
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
