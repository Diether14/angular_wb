import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCardItemComponent } from './store-card-item.component';

describe('StoreCardItemComponent', () => {
  let component: StoreCardItemComponent;
  let fixture: ComponentFixture<StoreCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
