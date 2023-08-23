import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { CoinsList, Portfolio, Coin } from "./pages/index";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Navbar } from './components';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
      <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Navbar />
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
