export default {
  empty: () => '/',
  login: () => '/login',
  signUp: () => '/signup',
  passwordReset: () => '/password_reset',
  home: () => '/home',
  registrationWithPrefilledEmail: () => `${registrationBase}/:email`,
  getRegistrationWithPrefilledEmail: prefilledEmail =>
    `${registrationBase}/${prefilledEmail}`,
  registration: () => registrationBase,
  results: () => '/results',
  getCompetitionDetail: id => `/results/${id}`,
};

const registrationBase = '/registration';
