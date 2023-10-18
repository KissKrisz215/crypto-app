import React, { useEffect, useState } from "react";
import {
  Container,
  LoadingBarItem,
  InnerWrapper,
} from "./PageLoadingBar.styles";

const PageLoadingBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, [200]);
  }, []);

  return (
    <Container>
      {isVisible && (
        <LoadingBarItem>
          <InnerWrapper />
        </LoadingBarItem>
      )}
    </Container>
  );
};

export default PageLoadingBar;
