import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home, Coin, Portfolio } from "./pages/index";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Navbar } from "./components";
import "./App.css";

const darkTheme = {
  main: "#191B1F",
  secondary: "#1F2128",
  primary: "#FAFBFB",
  navbarBrand: "#2C2F36",
  defaultTextColor: "#FFFFFF",
  icons: "invert(0%)",
  themeIcon: "invert(100%)",
  general: "#ffffff",
  chart1: "#0CF864",
  chart2: "#2172E5",
  lines: "#464749",
  shine1: "#1F2128",
  shine2: "#2C2F36",
  modal1: "#06d554",
  modal2: "ffffff",
};

const lightTheme = {
  main: "#FFFFFF",
  secondary: "#FCFCFC",
  primary: "#2C2F36",
  navbarBrand: "rgb(247, 247, 247)",
  defaultTextColor: "#2C2F36",
  icons: "invert(100%)",
  themeIcon: "invert(0%)",
  general: "#2c2f36",
  chart1: "#2172E5",
  chart2: "#0CF864",
  lines: "#EEEEEE",
  shine1: "#E0DED7",
  shine2: "#F7F7F7",
  modal1: "#1f2128",
  modal2: "#1f2128",
};

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

class App extends React.Component {
  state = {
    theme: false,
    active: "home",
    activeCurrency: currencies[0],
  };

  handleChangeTheme = () => {
    this.setState({ theme: !this.state.theme });
  };

  handleChangeActive = (active) => {
    this.setState({ active });
  };

  handleActiveCurrency = (currency) => {
    this.setState({ activeCurrency: currency });
  };

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <ThemeProvider
          theme={this.state.theme === false ? darkTheme : lightTheme}
        >
          <GlobalStyle />
          <Navbar
            active={this.state.active}
            handleChangeTheme={this.handleChangeTheme}
            handleActiveCurrency={this.handleActiveCurrency}
            activeCurrency={this.state.activeCurrency}
            currencies={currencies}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  active={this.state.active}
                  handleChangeActive={this.handleChangeActive}
                  activeCurrency={this.state.activeCurrency}
                />
              }
            />
            <Route
              path="/coins/:coinId"
              element={
                <Coin
                  active={this.state.active}
                  handleChangeActive={this.handleChangeActive}
                />
              }
            />
            <Route
              path="/portfolio"
              element={
                <Portfolio
                  active={this.state.active}
                  handleChangeActive={this.handleChangeActive}
                  activeCurrency={this.state.activeCurrency}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
