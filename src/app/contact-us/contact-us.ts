import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';
import { ContactUsHeader } from '../contact-us-header/contact-us-header';
import { ContactUsRates } from '../contact-us-rates/contact-us-rates';
import { ContactBody } from '../contact-body/contact-body';

@Component({
  selector: 'app-contact-us',
  imports: [NavBar, Footer, ContactUsHeader, ContactUsRates, ContactBody],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {}
