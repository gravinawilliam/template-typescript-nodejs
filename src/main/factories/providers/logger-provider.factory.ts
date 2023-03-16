import { ISendLogErrorLoggerProvider } from '@contracts/providers/logger/send-log-error-logger.provider';
import { ISendLogInfoLoggerProvider } from '@contracts/providers/logger/send-log-info-logger.provider';

import { GLOBAL_CONFIG } from '@external/configs/infrastructure.config';

import { WinstonLoggerProvider } from '@infrastructure/providers/logger/winston.logger-provider';

export const makeLoggerProvider = (): ISendLogErrorLoggerProvider & ISendLogInfoLoggerProvider =>
  new WinstonLoggerProvider({
    IS_DEVELOPMENT: GLOBAL_CONFIG.IS_DEVELOPMENT,
    LOGS_FOLDER: GLOBAL_CONFIG.LOGS_FOLDER
  });
