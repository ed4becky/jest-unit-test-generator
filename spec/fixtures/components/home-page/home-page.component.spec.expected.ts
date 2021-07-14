import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { HomePageComponent } from './home-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigData } from "./config-data.class";
import { Environment, TEST_ENV } from "./environment.class";

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let fakeRouter: jest.Mocked<Router>;
  let fakeRoute: jest.Mocked<ActivatedRoute>;
  let fakeEnvironment: Environment;
  let fakeData: ConfigData;

  beforeEach(async () => {
    fakeRouter = createSpyObj<Router>(Router, ['navigate']);
    fakeRoute = createSpyObj<ActivatedRoute>(ActivatedRoute, []);
    fakeEnvironment = {} as Environment;
    fakeData = {} as ConfigData;

    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      providers: [
        { provide: Router, useFactory: () => fakeRouter },
        { provide: ActivatedRoute, useFactory: () => fakeRoute },
        { provide: TEST_ENV, useValue: fakeEnvironment },
        { provide: ConfigData, useValue: fakeData },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD: ngOnInit', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.ngOnInit();
    });
  });

});
