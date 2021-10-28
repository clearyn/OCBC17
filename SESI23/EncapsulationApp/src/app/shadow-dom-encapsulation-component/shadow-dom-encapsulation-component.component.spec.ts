import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomEncapsulationComponentComponent } from './shadow-dom-encapsulation-component.component';

describe('ShadowDomEncapsulationComponentComponent', () => {
  let component: ShadowDomEncapsulationComponentComponent;
  let fixture: ComponentFixture<ShadowDomEncapsulationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowDomEncapsulationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowDomEncapsulationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
