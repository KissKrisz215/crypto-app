import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { Home, Coin, Portfolio } from "./pages/index";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Navbar } from "./components";
import PageLoadingBar from "./components/PageLoadingBar/PageLoadingBar";
import { setActivePage } from "./store/activePage/actions";
import { setActiveCurrency } from "./store/currency/actions";
import { setActiveTheme } from "./store/theme/actions";
import { themes } from "./styles/colors";
import "./App.css";

function App(props) {
  return (
    <div>
      <PageLoadingBar />
      <ThemeProvider theme={props.theme ? themes.lightTheme : themes.darkTheme}>
        <GlobalStyle />
        <Navbar active={props.active} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                active={props.active}
                handleChangeActive={props.handleChangeActive}
              />
            }
          />
          <Route
            path="/coins/:coinId"
            element={
              <Coin
                active={props.active}
                handleChangeActive={props.handleChangeActive}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio
                active={props.active}
                handleChangeActive={props.handleChangeActive}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = (state) => ({
  active: state.active,
  activeCurrency: state.activeCurrency,
  theme: state.activeTheme,
});

const mapDispatchToProps = {
  handleChangeActive: setActivePage,
  handleActiveCurrency: setActiveCurrency,
  handleChangeTheme: setActiveTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
