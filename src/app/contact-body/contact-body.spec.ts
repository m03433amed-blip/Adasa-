import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBody } from './contact-body';

describe('ContactBody', () => {
  let component: ContactBody;
  let fixture: ComponentFixture<ContactBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
