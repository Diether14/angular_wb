import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesStatementPageComponent } from './cookies-statement-page.component';

describe('CookiesStatementPageComponent', () => {
  let component: CookiesStatementPageComponent;
  let fixture: ComponentFixture<CookiesStatementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesStatementPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesStatementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
