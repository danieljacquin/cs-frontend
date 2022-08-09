import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './App.css';

const theme = createTheme({
  palette:{
    primary: {
      main: '#333996',
      light: '#f3e5f5',
      dark: '#ab47bc'
    }
  }
})



function App() {

  return (
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <Header/>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
