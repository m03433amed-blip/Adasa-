import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBlog } from './body-blog';

describe('BodyBlog', () => {
  let component: BodyBlog;
  let fixture: ComponentFixture<BodyBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
