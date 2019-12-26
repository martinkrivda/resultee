export default {
    empty: () => '/',
    login: () => '/login',
    home: () => '/home',
    registrationWithPrefilledEmail: () => `${registrationBase}/:email`,
    getRegistrationWithPrefilledEmail: prefilledEmail =>
      `${registrationBase}/${prefilledEmail}`,
    registration: () => registrationBase,
  };

  const registrationBase = '/registration';