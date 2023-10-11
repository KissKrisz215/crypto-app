import React, { useEffect } from "react";

const Coin = ({ handleChangeActive, active }) => {
  useEffect(() => {
    handleChangeActive("portfolio");
    console.log(active);
  }, [handleChangeActive, active]);

  return <div></div>;
};

export default Coin;
