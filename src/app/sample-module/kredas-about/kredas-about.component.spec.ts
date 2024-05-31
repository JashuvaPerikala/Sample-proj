import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KredasAboutComponent } from './kredas-about.component';

describe('KredasAboutComponent', () => {
  let component: KredasAboutComponent;
  let fixture: ComponentFixture<KredasAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KredasAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KredasAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
