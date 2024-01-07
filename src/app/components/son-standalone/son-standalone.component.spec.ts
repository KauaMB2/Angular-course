import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonStandaloneComponent } from './son-standalone.component';

describe('SonStandaloneComponent', () => {
  let component: SonStandaloneComponent;
  let fixture: ComponentFixture<SonStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SonStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
