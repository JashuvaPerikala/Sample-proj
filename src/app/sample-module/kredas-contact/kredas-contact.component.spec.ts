import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KredasContactComponent } from './kredas-contact.component';

describe('KredasContactComponent', () => {
  let component: KredasContactComponent;
  let fixture: ComponentFixture<KredasContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KredasContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KredasContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
