import React from 'react';
import { useField } from 'formik';

import { CheckBoxWithLabel } from '../molecules';

export const CheckBox = props => {
  const [field, meta] = useField(props);

  const error = meta.touched && meta.error ? meta.error : undefined;

  return <CheckBoxWithLabel error={error} {...field} {...props} />;
};
