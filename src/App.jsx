import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CoinsList, Portfolio, Coin } from "./pages/index";
import { GlobalStyle } from "./styles/GlobalStyle";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
      <GlobalStyle>
        <Routes>
          <Route path="/" element={<CoinsList />} />
          <Route path="/coins/:coinId" element={<Coin />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </GlobalStyle>
      </div>
    );
  }
}

export default App;
