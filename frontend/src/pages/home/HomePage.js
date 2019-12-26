import React, { useState } from 'react';
import { NotLoggedInPageLayout } from '../../templates';
import { ResultsList } from './ResultsList';

export const HomePage = () => {
  const errorList = [];
  return (
    <NotLoggedInPageLayout errorList={errorList}>
      <ResultsList></ResultsList>
    </NotLoggedInPageLayout>
  );
};
