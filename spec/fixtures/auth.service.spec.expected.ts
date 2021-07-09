import { AuthService } from './auth.service';
import { LoggerService } from './helpers/logger.service';
import { EventBusService } from './helpers/event-bus.service';

describe('AuthService', () => {
  let service: AuthService;
  let fakeWindow: jest.Mocked<Window>;
  let fakeLogger: jest.Mocked<LoggerService>;
  let fakeEventBusService: jest.Mocked<EventBusService>;

  function createService() {
    service = new AuthService(
      fakeWindow,
      fakeLogger,
      fakeEventBusService,
    );
  }

  beforeEach(() => {
    fakeWindow = createSpyObj<Window>('Window', ['setInterval']);
    fakeLogger = createSpyObj<LoggerService>('LoggerService', ['debug']);
    fakeEventBusService = createSpyObj<EventBusService>('EventBusService', ['publish']);

    createService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

});
