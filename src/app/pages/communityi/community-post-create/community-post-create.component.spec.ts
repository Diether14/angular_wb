import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPostCreateComponent } from './community-post-create.component';

describe('CommunityPostCreateComponent', () => {
  let component: CommunityPostCreateComponent;
  let fixture: ComponentFixture<CommunityPostCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPostCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
