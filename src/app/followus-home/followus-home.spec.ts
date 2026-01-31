import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowusHome } from './followus-home';

describe('FollowusHome', () => {
  let component: FollowusHome;
  let fixture: ComponentFixture<FollowusHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowusHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowusHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
