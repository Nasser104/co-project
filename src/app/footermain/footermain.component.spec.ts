import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootermainComponent } from './footermain.component';

describe('FootermainComponent', () => {
  let component: FootermainComponent;
  let fixture: ComponentFixture<FootermainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootermainComponent]
    });
    fixture = TestBed.createComponent(FootermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
