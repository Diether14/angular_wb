import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoticonStoreComponent } from './emoticon-store.component';

describe('EmoticonStoreComponent', () => {
  let component: EmoticonStoreComponent;
  let fixture: ComponentFixture<EmoticonStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoticonStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoticonStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
