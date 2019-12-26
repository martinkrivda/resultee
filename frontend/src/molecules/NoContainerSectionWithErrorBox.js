import React from 'react';
import Container from '@material-ui/core/Container';

export const NoContainerSectionWithErrorBox = ({
  children,
}) => (
  <div>
    <Container>
      
    </Container>

    {children}
  </div>
);