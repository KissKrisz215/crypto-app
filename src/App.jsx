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
import { themes } from "./styles/colors";
import "./App.css";

function App(props) {
  const [theme, setTheme] = useState();

  const handleChangeTheme = () => {
    const newTheme = !theme;
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const activeTheme = localStorage.getItem("theme");
    if (activeTheme) {
      setTheme(activeTheme === "true");
    } else {
      setTheme(false);
      localStorage.setItem("theme", false);
    }
  }, []);

  return (
    <div>
      <PageLoadingBar />
      <ThemeProvider theme={theme ? themes.lightTheme : themes.darkTheme}>
        <GlobalStyle />
        <Navbar active={props.active} handleChangeTheme={handleChangeTheme} />
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
});

const mapDispatchToProps = {
  handleChangeActive: setActivePage,
  handleActiveCurrency: setActiveCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
