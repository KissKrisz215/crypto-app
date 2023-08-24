import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home ,Coin, Portfolio } from "./pages/index";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Navbar } from "./components";
import "./App.css";

const darkTheme = {
  main: "#191B1F",
  secondary: "#1F2128",
  primary: "#FAFBFB",
  navbarBrand: "#2C2F36",
  defaultTextColor: '#FFFFFF',
};

const lightTheme = {
  main: "#FFFFFF",
  secondary: "#FCFCFC",
  primary: "#2C2F36",
  navbarBrand: "#FCFCFC",
  defaultTextColor: "#2C2F36"
};

class App extends React.Component {
  state = {
    theme: false,
    active: 'home'
  };

  handleChangeTheme = () => {
    this.setState({ theme: !this.state.theme });
  };

  handleChangeActive = (active) => {
    this.setState({active})
  }

  render() {
    return (
      <div>
        <ThemeProvider
          theme={this.state.theme === false ? darkTheme : lightTheme}
        >
          <GlobalStyle />
          <Navbar active={this.state.active} handleChangeTheme={this.handleChangeTheme} />
          <Routes>
            <Route path="/" element={<Home active={this.state.active} handleChangeActive={this.handleChangeActive} />} />
            <Route path="/coins/:coinId" element={<Coin active={this.state.active} handleChangeActive={this.handleChangeActive} />} />
            <Route path="/portfolio" element={<Portfolio active={this.state.active} handleChangeActive={this.handleChangeActive} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
