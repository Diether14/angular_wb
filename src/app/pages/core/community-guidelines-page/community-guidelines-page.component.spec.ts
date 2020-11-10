import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityGuidelinesPageComponent } from './community-guidelines-page.component';

describe('CommunityGuidelinesPageComponent', () => {
  let component: CommunityGuidelinesPageComponent;
  let fixture: ComponentFixture<CommunityGuidelinesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityGuidelinesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityGuidelinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
