import { ISendLogErrorLoggerProvider } from '@contracts/providers/logger/send-log-error-logger.provider';
import { ISendLogInfoLoggerProvider } from '@contracts/providers/logger/send-log-info-logger.provider';

import { WinstonLoggerProvider } from '@infrastructure/providers/logger/winston.logger-provider';

export const makeLoggerProvider = (): ISendLogErrorLoggerProvider & ISendLogInfoLoggerProvider =>
  new WinstonLoggerProvider({
    IS_DEVELOPMENT: true,
    LOGS_FOLDER: 'logs'
  });
