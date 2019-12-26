import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Routes } from './Routes';
import { ApiProvider } from './utils/api';
import { AuthProvider } from './utils/auth';
import { ScrollToTop } from './atoms';

export default function App() {
  return (
    <AllProviders>
      <Routes />
    </AllProviders>
  );
}

function AllProviders({ children }) {
  return (
    <Suspense fallback={<LinearProgress />}>
      <AuthProvider>
        <ApiProvider>
          <BrowserRouter>
            <ScrollToTop />
            {children}
          </BrowserRouter>
        </ApiProvider>
      </AuthProvider>
    </Suspense>
  );
}
