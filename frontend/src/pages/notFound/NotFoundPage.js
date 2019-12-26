import React from 'react';
import { useTranslation } from 'react-i18next';

import './style.css';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>{t('Page.NotFound.RequestedPage')}</h2>
      </div>
    </div>
  );
};
