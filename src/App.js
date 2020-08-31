import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Navbar from "./components/Navbar";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
