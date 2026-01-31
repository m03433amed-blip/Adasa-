import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadBlog } from './head-blog';

describe('HeadBlog', () => {
  let component: HeadBlog;
  let fixture: ComponentFixture<HeadBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
