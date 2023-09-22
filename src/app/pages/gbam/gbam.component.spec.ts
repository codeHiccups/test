import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GBAMComponent } from './gbam.component';

describe('GBAMComponent', () => {
  let component: GBAMComponent;
  let fixture: ComponentFixture<GBAMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GBAMComponent]
    });
    fixture = TestBed.createComponent(GBAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
