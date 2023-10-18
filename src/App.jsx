import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home, Coin, Portfolio } from "./pages/index";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Navbar } from "./components";
import PageLoadingBar from "./components/PageLoadingBar/PageLoadingBar";
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
  inputMode: "#2C2D33",
  lineGraph: "rgba(23,24,33,0)",
  lineBackground: "#404040",
};

const lightTheme = {
  main: "#FFFFFF",
  secondary: "#FCFCFC",
  primary: "#2C2F36",
  navbarBrand: "#F7F7F7",
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
  inputMode: "#F7F7F7",
  lineGraph: "#F7F7F7",
  lineBackground: "#D3D0C9",
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

function App() {
  const [theme, setTheme] = useState();
  const [active, setActive] = useState("home");
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

  const handleChangeActive = (newActive) => {
    setActive(newActive);
  };

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

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div>
      <PageLoadingBar />
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Navbar
          active={active}
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
                active={active}
                handleChangeActive={handleChangeActive}
                activeCurrency={activeCurrency}
              />
            }
          />
          <Route
            path="/coins/:coinId"
            element={
              <Coin
                active={active}
                handleChangeActive={handleChangeActive}
                activeCurrency={activeCurrency}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio
                active={active}
                handleChangeActive={handleChangeActive}
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

export default App;
