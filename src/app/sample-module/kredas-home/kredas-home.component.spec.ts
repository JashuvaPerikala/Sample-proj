import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KredasHomeComponent } from './kredas-home.component';

describe('KredasHomeComponent', () => {
  let component: KredasHomeComponent;
  let fixture: ComponentFixture<KredasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KredasHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KredasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
