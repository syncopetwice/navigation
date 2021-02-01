import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSubheaderComponent } from './subheader.component';

describe('AppSubheaderComponent', () => {
  let component: AppSubheaderComponent;
  let fixture: ComponentFixture<AppSubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSubheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
