import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { CoinsList, Portfolio, Coin } from "./pages/index";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Navbar } from './components';
import "./App.css";

const darkTheme = {
  main: '#191B1F',
  secondary: '#1F2128',
  primary: '#FAFBFB'
}

const lightTheme = {
  main: '#FFFFFF',
  secondary: '#FCFCFC',
  primary: '#2C2F36'
}

class App extends React.Component {
  state = {
    theme: false
  }

  handleChangeTheme = () => {
    this.setState({theme: !this.state.theme})
  }

  render() {
    return (
      <div>
      <ThemeProvider theme={this.state.theme === false ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar handleChangeTheme={this.handleChangeTheme}  />
        <Routes>
          <Route path="/" element={<CoinsList />} />
          <Route path="/coins/:coinId" element={<Coin />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
