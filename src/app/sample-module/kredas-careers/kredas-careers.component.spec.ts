import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KredasCareersComponent } from './kredas-careers.component';

describe('KredasCareersComponent', () => {
  let component: KredasCareersComponent;
  let fixture: ComponentFixture<KredasCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KredasCareersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KredasCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
