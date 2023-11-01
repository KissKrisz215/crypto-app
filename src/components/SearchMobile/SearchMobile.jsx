import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setMobileActive } from "../../store/mobileActive/actions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  SearchContainer,
  Wrapper,
  Header,
  CloseButton,
  Title,
} from "./SearchMobile.styles";
import SearchBar from "../SearchBar/SearchBar";

const SearchMobile = () => {
  const mobileActive = useSelector((state) => state.mobileActive);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleCloseSearch = () => {
    if (currentPath === "/") {
      dispatch(setMobileActive("home"));
    } else if (currentPath.includes("portfolio")) {
      dispatch(setMobileActive("portfolio"));
    } else if (currentPath.includes("coins")) {
      dispatch(setMobileActive("summary"));
    }
  };

  useEffect(() => {
    if (mobileActive === "search") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [mobileActive]);

  return (
    <Container isActive={isActive}>
      <Wrapper>
        <Header>
          <CloseButton onClick={handleCloseSearch}>
            <FontAwesomeIcon size={"xl"} icon={faXmark} />
          </CloseButton>
          <Title>Close</Title>
        </Header>
        <SearchContainer>
          <SearchBar isActive={true} />
        </SearchContainer>
      </Wrapper>
    </Container>
  );
};

export default SearchMobile;
