import React from 'react';
import Container from '@material-ui/core/Container';
import { ErrorBox } from '../atoms/ErrorBox';

export const NoContainerSectionWithErrorBox = ({ children, errorList }) => (
  <div>
    <Container>
      <ErrorBox className="pb3" errorList={errorList} />
    </Container>

    {children}
  </div>
);
