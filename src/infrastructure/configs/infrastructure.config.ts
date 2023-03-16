import { getEnvironmentString } from '@external/providers/get-envs/dot-environment.get-environments-provider';

enum NODE_ENV {
  DEVELOPMENT = 'DEVELOPMENT',
  PRODUCTION = 'PRODUCTION'
}

export const GLOBAL_CONFIG = {
  IS_DEVELOPMENT:
    getEnvironmentString({
      defaultValue: NODE_ENV.DEVELOPMENT,
      key: 'NODE_ENV'
    }) === NODE_ENV.DEVELOPMENT,
  LOGS_FOLDER: getEnvironmentString({
    defaultValue: 'logs',
    key: 'LOGS_FOLDER'
  })
};
