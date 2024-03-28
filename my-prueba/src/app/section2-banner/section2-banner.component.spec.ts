import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2BannerComponent } from './section2-banner.component';

describe('Section2BannerComponent', () => {
  let component: Section2BannerComponent;
  let fixture: ComponentFixture<Section2BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section2BannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section2BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
