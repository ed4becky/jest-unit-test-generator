import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { LoginFormComponent } from './login-form.component';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '../../auth.service';
import { EventBusService } from '../../helpers/event-bus.service';
import { LoginEvent, LogoutEvent } from '../../helpers/events';
import { ReplaySubject } from 'rxjs';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let fakeAuthService: jest.Mocked<AuthService>;
  let fakeEventBusService: jest.Mocked<EventBusService>;
  let loginEventSubject: ReplaySubject<LoginEvent>;
  let logoutEventSubject: ReplaySubject<LogoutEvent>;
  let fakeDocument: jest.Mocked<Document>;
  let fakeWindow: jest.Mocked<Window>;

  beforeEach(async () => {
    fakeAuthService = createSpyObj<AuthService>(AuthService, ['login']);
    fakeEventBusService = createSpyObj<EventBusService>(EventBusService, ['of']);
    loginEventSubject = new ReplaySubject<LoginEvent>(1);
    logoutEventSubject = new ReplaySubject<LogoutEvent>(1);
    fakeEventBusService.of.mockImplementation((ev) => {
      if (ev === LoginEvent) {
        return loginEventSubject;
      } else if (ev === LogoutEvent) {
        return logoutEventSubject;
      } else {
        throw new Error('event:' + ev + ' not mocked');
      }
    });
    fakeDocument = createSpyObj<Document>(Document, ['querySelectorAll']);
    fakeWindow = createSpyObj<Window>(Window, ['alert']);

    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      providers: [
        { provide: AuthService, useFactory: () => fakeAuthService },
        { provide: EventBusService, useFactory: () => fakeEventBusService },
        { provide: DOCUMENT, useFactory: () => fakeDocument },
        { provide: 'window', useFactory: () => fakeWindow },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD: ngOnInit', () => {
    it('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.ngOnInit();
    });
  });

  describe('METHOD: login', () => {
    it('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.login();
    });
  });

  describe('METHOD: error', () => {
    it('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.error();
    });
  });

});
