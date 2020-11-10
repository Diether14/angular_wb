import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivaryPageComponent } from './privary-page.component';

describe('PrivaryPageComponent', () => {
  let component: PrivaryPageComponent;
  let fixture: ComponentFixture<PrivaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivaryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
