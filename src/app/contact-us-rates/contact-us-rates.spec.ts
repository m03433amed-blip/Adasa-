import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsRates } from './contact-us-rates';

describe('ContactUsRates', () => {
  let component: ContactUsRates;
  let fixture: ComponentFixture<ContactUsRates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsRates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsRates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
