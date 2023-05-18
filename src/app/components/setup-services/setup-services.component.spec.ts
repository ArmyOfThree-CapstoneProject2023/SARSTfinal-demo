import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupServicesComponent } from './setup-services.component';

describe('SetupServicesComponent', () => {
  let component: SetupServicesComponent;
  let fixture: ComponentFixture<SetupServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
