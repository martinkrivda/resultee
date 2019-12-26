const apiPrefix = '/api';

const enumPrefix = `${apiPrefix}/enum`;

export default {
  login: () => `${apiPrefix}/auth/login`,
  registration: () => `${apiPrefix}/auth/register-user`,
  
  // enums
  enumEvents: () => `${enumPrefix}/events`,
};