import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { Home, Coin, Portfolio } from "./pages/index";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Navbar } from "./components";
import PageLoadingBar from "./components/PageLoadingBar/PageLoadingBar";
import { setActivePage } from "./store/activePage/actions";
import { themes } from "./styles/colors";
import "./App.css";

const currencies = [
  {
    name: "usd",
    symbol: "$",
    isActive: true,
  },
  {
    name: "eur",
    symbol: "€",
    isActive: false,
  },
  {
    name: "gbp",
    symbol: "£",
    isActive: false,
  },
];

function App(props) {
  const [theme, setTheme] = useState();
  const [activeCurrency, setActiveCurrency] = useState(currencies[0]);

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

  const handleActiveCurrency = (currency) => {
    localStorage.setItem("currency", JSON.stringify(currency));
    setActiveCurrency(currency);
  };

  useEffect(() => {
    const activeCurrency = JSON.parse(localStorage.getItem("currency"));
    if (activeCurrency) {
      setActiveCurrency(activeCurrency);
    } else {
      setActiveCurrency(currencies[0]);
      localStorage.setItem("currency", JSON.stringify(currencies[0]));
    }
  }, []);

  return (
    <div>
      <PageLoadingBar />
      <ThemeProvider theme={theme ? themes.lightTheme : themes.darkTheme}>
        <GlobalStyle />
        <Navbar
          active={props.active}
          handleChangeTheme={handleChangeTheme}
          handleActiveCurrency={handleActiveCurrency}
          activeCurrency={activeCurrency}
          currencies={currencies}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                active={props.active}
                handleChangeActive={props.handleChangeActive}
                activeCurrency={activeCurrency}
              />
            }
          />
          <Route
            path="/coins/:coinId"
            element={
              <Coin
                active={props.active}
                handleChangeActive={props.handleChangeActive}
                activeCurrency={activeCurrency}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio
                active={props.active}
                handleChangeActive={props.handleChangeActive}
                activeCurrency={activeCurrency}
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
});

const mapDispatchToProps = {
  handleChangeActive: setActivePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
