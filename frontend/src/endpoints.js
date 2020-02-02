const apiPrefix = '/api';

const enumPrefix = `${apiPrefix}/enum`;

export default {
  login: () => `${apiPrefix}/auth/login`,
  signUp: () => `${apiPrefix}/auth/signup`,
  resetPassword: () => `${apiPrefix}/auth/reset-password`,
  getResultatCompetitionList: () =>
    `https://liveresultat.orientering.se/api.php?method=getcompetitions`,

  // enums
  enumEvents: () => `${enumPrefix}/events`,
};
