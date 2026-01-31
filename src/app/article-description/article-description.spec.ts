import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDescription } from './article-description';

describe('ArticleDescription', () => {
  let component: ArticleDescription;
  let fixture: ComponentFixture<ArticleDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
