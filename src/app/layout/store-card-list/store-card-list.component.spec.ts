import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCardListComponent } from './store-card-list.component';

describe('StoreCardListComponent', () => {
  let component: StoreCardListComponent;
  let fixture: ComponentFixture<StoreCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
