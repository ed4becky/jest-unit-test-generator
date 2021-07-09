import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { HomePageComponent } from './home-page.component';
import { Router, ActivatedRoute } from '@angular/router';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let fakeRouter: jest.Mocked<Router>;
  let fakeRoute: jest.Mocked<ActivatedRoute>;

  beforeEach(async () => {
    fakeRouter = createSpyObj<Router>(Router, ['navigate']);
    fakeRoute = createSpyObj<ActivatedRoute>(ActivatedRoute, []);

    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      providers: [
        { provide: Router, useFactory: () => fakeRouter },
        { provide: ActivatedRoute, useFactory: () => fakeRoute },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD: ngOnInit', () => {
    it('should do something', () => {
      // TODO implement test
      // component.ngOnInit();
    });
  });

});
