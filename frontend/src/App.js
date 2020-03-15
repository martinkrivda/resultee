import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Routes } from './Routes';
import { ApiProvider } from './utils/api';
import { AuthProvider } from './utils/auth';
import { ScrollToTop } from './atoms';
import { useDarkMode } from './utils/useDarkMode';

export default function App() {
  const [theme, componentMounted] = useDarkMode();
  const themeConfig = createMuiTheme(theme);

  if (!componentMounted) {
    return <div />;
  }
  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <AllProviders>
        <Routes />
      </AllProviders>
    </ThemeProvider>
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
