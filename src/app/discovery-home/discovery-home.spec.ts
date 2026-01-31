import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryHome } from './discovery-home';

describe('DiscoveryHome', () => {
  let component: DiscoveryHome;
  let fixture: ComponentFixture<DiscoveryHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoveryHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoveryHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
