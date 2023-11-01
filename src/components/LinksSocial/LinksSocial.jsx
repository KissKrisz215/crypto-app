import React, { useState, useEffect } from "react";
import { Container, SocialLink, SocialLogo } from "./LinksSocial.styles";
import Icons from "../../assets/index";

const LinksSocial = () => {
  return (
    <Container>
      <SocialLink href="https://www.github.com">
        <SocialLogo src={Icons.GithubLogo} />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com" target="_blank">
        <SocialLogo src={Icons.LinkedInLogo} />
      </SocialLink>
    </Container>
  );
};

export default LinksSocial;
