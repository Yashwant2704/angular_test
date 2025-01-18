import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseBtnComponent } from './reuse-btn.component';

describe('ReuseBtnComponent', () => {
  let component: ReuseBtnComponent;
  let fixture: ComponentFixture<ReuseBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
