import * as yup from 'yup';

export const translatedValidations = t => ({
  email: email(t),
  requiredString: requiredString(t),
  requiredEmail: requiredEmail(t),
  passwordsDontMatch: passwordsDontMatch(t),
  object: obj => yup.object().shape(obj),
  requiredDate: requiredDate(t),
});

const string = () => yup.string();

const number = () => yup.number();

const date = () => yup.date();

const requiredString = t => string(t).required(t('Validations.Required'));

const email = t => string(t).email(t('Validations.Email'));

const requiredEmail = t => requiredString(t).email(t('Validations.Email'));

const requiredDate = t => date(t).required(t('Validations.Date'));

const passwordsDontMatch = t => passwordFieldName =>
  requiredString(t).oneOf(
    [yup.ref(passwordFieldName)],
    t('Validations.PasswordsDontMatch'),
  );
