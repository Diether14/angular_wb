import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoticonBundleViewComponent } from './emoticon-bundle-view.component';

describe('EmoticonBundleViewComponent', () => {
  let component: EmoticonBundleViewComponent;
  let fixture: ComponentFixture<EmoticonBundleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoticonBundleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoticonBundleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
