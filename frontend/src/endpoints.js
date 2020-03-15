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
  getResultatLastPassings: id =>
    `https://liveresultat.orientering.se/api.php?method=getlastpassings&comp=${id}`,
  getResultatClassResults: (id, classId, lastHash) =>
    `https://liveresultat.orientering.se/api.php?comp=${id}&method=getclassresults&unformattedTimes=true&class=${classId}&last_hash=${lastHash}`,
  getClubResults: (id, clubId) =>
    `https://liveresultat.orientering.se/api.php?comp=${id}&method=getcclubresults&unformattedTimes=true&club=${clubId}`,

  // enums
  enumEvents: () => `${enumPrefix}/events`,
};
