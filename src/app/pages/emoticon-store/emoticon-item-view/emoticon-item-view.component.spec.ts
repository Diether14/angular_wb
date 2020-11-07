import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoticonItemViewComponent } from './emoticon-item-view.component';

describe('EmoticonItemViewComponent', () => {
  let component: EmoticonItemViewComponent;
  let fixture: ComponentFixture<EmoticonItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoticonItemViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoticonItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
