import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestStandaloneComponent } from './test-standalone.component';

describe('TestStandaloneComponent', () => {
  let component: TestStandaloneComponent;
  let fixture: ComponentFixture<TestStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TestStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
