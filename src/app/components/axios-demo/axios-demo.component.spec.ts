import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiosDemoComponent } from './axios-demo.component';

describe('AxiosDemoComponent', () => {
  let component: AxiosDemoComponent;
  let fixture: ComponentFixture<AxiosDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxiosDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxiosDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
