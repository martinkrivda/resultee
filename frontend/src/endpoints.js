const apiPrefix = '/api';

const enumPrefix = `${apiPrefix}/enum`;

export default {
  login: () => `${apiPrefix}/auth/login`,
  signUp: () => `${apiPrefix}/auth/signup`,
  resetPassword: () => `${apiPrefix}/auth/reset-password`,

  // enums
  enumEvents: () => `${enumPrefix}/events`,
};
