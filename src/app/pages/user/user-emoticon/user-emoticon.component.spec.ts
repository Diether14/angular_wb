import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmoticonComponent } from './user-emoticon.component';

describe('UserEmoticonComponent', () => {
  let component: UserEmoticonComponent;
  let fixture: ComponentFixture<UserEmoticonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEmoticonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEmoticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
