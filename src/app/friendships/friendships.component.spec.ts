import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendshipsComponent } from './friendships.component';

describe('FriendshipsComponent', () => {
  let component: FriendshipsComponent;
  let fixture: ComponentFixture<FriendshipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendshipsComponent]
    });
    fixture = TestBed.createComponent(FriendshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
