import React from "react";
import { useState } from "react";
import {
  LinkWrapper,
  LinkContainer,
  LinkLogo,
  LinkItem,
  CopyClipBoard,
  ClipBoardItem,
  ClipBoardToolTip,
} from "./CoinLink.styles";
import Icons from "../../assets/";

export const CoinLink = ({ link }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleIsSelected = (value) => {
    setIsSelected(value);
  };

  const copyToClipBoard = (textToCopy) => {
    const input = document.createElement("input");
    input.value = textToCopy;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <LinkWrapper>
      <LinkContainer>
        <LinkItem href={link} target="_blank">
          <LinkLogo src={Icons.Link} />
        </LinkItem>
      </LinkContainer>
      <LinkItem href={link} target="_blank">
        {link}
      </LinkItem>
      <CopyClipBoard
        onClick={() => copyToClipBoard(link)}
        onMouseEnter={handleIsSelected}
        onMouseLeave={() => setIsSelected(false)}
      >
        <ClipBoardItem src={Icons.Copy} />
        {isSelected && (
          <ClipBoardToolTip>
            {isCopied ? "Copied!" : "Click to Copy"}
          </ClipBoardToolTip>
        )}
      </CopyClipBoard>
    </LinkWrapper>
  );
};

export default CoinLink;
