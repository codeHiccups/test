import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSWOComponent } from './cswo.component';

describe('CSWOComponent', () => {
  let component: CSWOComponent;
  let fixture: ComponentFixture<CSWOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CSWOComponent]
    });
    fixture = TestBed.createComponent(CSWOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
