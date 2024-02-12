import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurfeatureComponent } from './ourfeature.component';

describe('OurfeatureComponent', () => {
  let component: OurfeatureComponent;
  let fixture: ComponentFixture<OurfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurfeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
