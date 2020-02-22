const apiPrefix = '/api';

const enumPrefix = `${apiPrefix}/enum`;

export default {
  login: () => `${apiPrefix}/auth/login`,
  signUp: () => `${apiPrefix}/auth/signup`,
  resetPassword: () => `${apiPrefix}/auth/reset-password`,
  getResultatCompetitionList: () =>
    `https://liveresultat.orientering.se/api.php?method=getcompetitions`,
  getResultatCompetitionInfo: id =>
    `https://liveresultat.orientering.se/api.php?method=getcompetitioninfo&comp=${id}`,
  getResultatClasses: id =>
    `https://liveresultat.orientering.se/api.php?method=getclasses&comp=${id}`,

  // enums
  enumEvents: () => `${enumPrefix}/events`,
};
