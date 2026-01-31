import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentHome } from './recent-home';

describe('RecentHome', () => {
  let component: RecentHome;
  let fixture: ComponentFixture<RecentHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
