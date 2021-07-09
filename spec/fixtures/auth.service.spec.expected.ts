import { TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { AuthService } from './auth.service';
import { LoggerService } from './helpers/logger.service';
import { EventBusService } from './helpers/event-bus.service';

describe('AuthService', () => {
  let service: AuthService;
  let fakeWindow: jest.Mocked<Window>;
  let fakeLogger: jest.Mocked<LoggerService>;
  let fakeEventBusService: jest.Mocked<EventBusService>;

  beforeEach(async () => {
    fakeWindow = createSpyObj<Window>(Window, ['setInterval']);
    fakeLogger = createSpyObj<LoggerService>(LoggerService, ['debug']);
    fakeEventBusService = createSpyObj<EventBusService>(EventBusService, ['publish']);

    await TestBed.configureTestingModule({
      providers: [
        { provide: 'window', useFactory: () => fakeWindow },
        { provide: LoggerService, useFactory: () => fakeLogger },
        { provide: EventBusService, useFactory: () => fakeEventBusService },
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('METHOD: login', () => {
    it('should do something', () => {
      // TODO implement test
      // service.login();
    });
  });

  describe('METHOD: logout', () => {
    it('should do something', () => {
      // TODO implement test
      // service.logout();
    });
  });

});
