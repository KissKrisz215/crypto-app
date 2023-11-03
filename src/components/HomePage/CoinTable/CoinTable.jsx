import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  TableHead,
  TableRowHeader,
  Title,
  TableBody,
  CircleIcon,
  CircleContainer,
  ArrowIcon,
  Buttons,
  NavigationContainer,
  Navigation,
  TableWrapper,
  NavigationTitle,
  NavigationWrapper,
  NavigationText,
  SelectPageContainer,
  ArrowLogo,
  ArrowContainer,
  NavigationHeader,
  ShowRowsContainer,
  ShowRowsHeader,
} from "./CoinTable.styles";
import CoinButton from "../CoinButton/CoinButton";
import TableRow from "../TableRow/TableRow";
import percentageBarColors from "../../../utils/PercentageBarColors";
import SelectRows from "../SelectRows/";
import Icons from "../../../assets/index";
import {
  setActiveCategory,
  setCurrentPage,
} from "../../../store/coins/actions";
import { getCoins, setData } from "../../../store/coins/actions";

const categoriesArray = [
  { name: "Cryptocurrency", category: null },
  { name: "DeFi", category: "decentralized-finance-defi" },
  { name: "NFTs", category: "non-fungible-tokens-nft" },
  { name: "Metaverse", category: "metaverse" },
];

const CoinTable = ({ sortCoins, sortBy, sortType }) => {
  const data = useSelector((state) => state.coins.data);
  const isLoading = useSelector((state) => state.coins.isLoading);
  const errorMessage = useSelector((state) => state.coins.errorMessage);
  const activeCategory = useSelector((state) => state.coins.activeCategory);
  const currentPage = useSelector((state) => state.coins.currentPage);
  const showRows = useSelector((state) => state.coins.showRows);
  const dispatch = useDispatch();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [buttonsArray, setButtonsArray] = useState(
    isMobileView
      ? ["Name", "Price", "1h%"]
      : ["#", "Name", "Price", "1h%", "24h%", "7d%"]
  );

  const sortByName = () => {
    const dataArray = JSON.parse(JSON.stringify(data));
    let data1;

    if (sortType === true) {
      data1 = dataArray.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      data1 = dataArray.sort((a, b) => a.name.localeCompare(b.name));
    }

    dispatch(setData(data1));
  };

  const sortByPrice = () => {
    const dataArray = JSON.parse(JSON.stringify(data));
    let data1;

    if (sortType === true) {
      data1 = dataArray.sort((a, b) => b.current_price - a.current_price);
    } else {
      data1 = dataArray.sort((a, b) => a.current_price - b.current_price);
    }

    dispatch(setData(data1));
  };

  const sortByHour = (time) => {
    const timeValue = time.replace(/%/g, "");
    const dataArray = JSON.parse(JSON.stringify(data));
    let data1;
    if (sortType === true) {
      data1 = dataArray.sort(
        (a, b) =>
          b[`price_change_percentage_${timeValue}_in_currency`] -
          a[`price_change_percentage_${timeValue}_in_currency`]
      );
    } else {
      data1 = dataArray.sort(
        (a, b) =>
          a[`price_change_percentage_${timeValue}_in_currency`] -
          b[`price_change_percentage_${timeValue}_in_currency`]
      );
    }

    dispatch(setData(data1));
  };

  const defaultSort = () => {
    const dataArray = JSON.parse(JSON.stringify(data));
    let data1;
    if (sortType === true) {
      data1 = dataArray.sort((a, b) => b.market_cap_rank - a.market_cap_rank);
    } else {
      data1 = dataArray.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
    }
    dispatch(setData(data1));
  };

  const handleSort = () => {
    if (sortBy === "Name") {
      sortByName();
    } else if (sortBy === "Price") {
      sortByPrice();
    } else if (sortBy === "1h%" || sortBy === "24h%" || sortBy === "7d%") {
      sortByHour(sortBy);
    } else {
      defaultSort();
    }
  };

  useEffect(() => {
    dispatch(setData(data));
    dispatch(getCoins());
    const intervalId = setInterval(() => {
      dispatch(getCoins());
    }, 60000);

    const handleResize = () => {
      const newIsMobileView = window.innerWidth <= 768;
      setIsMobileView(newIsMobileView);
      setButtonsArray(
        newIsMobileView
          ? ["Name", "Price", "1h%"]
          : ["#", "Name", "Price", "1h%", "24h%", "7d%"]
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    dispatch(getCoins());
  }, [showRows, currentPage, activeCategory.name, sortBy, sortType]);

  if (isMobileView) {
    return (
      <Container>
        <NavigationContainer>
          <NavigationWrapper>
            <NavigationHeader>
              <Navigation>
                <NavigationTitle>Filter by:</NavigationTitle>
                {categoriesArray &&
                  categoriesArray.map((category) => (
                    <Buttons
                      key={category}
                      category={category}
                      activeCategory={activeCategory}
                      onClick={() => dispatch(setActiveCategory(category))}
                    >
                      {category.name}
                    </Buttons>
                  ))}
              </Navigation>
            </NavigationHeader>
            <Navigation>
              <NavigationText>
                <ShowRowsHeader>Page:</ShowRowsHeader>
                <SelectPageContainer>
                  <ArrowContainer
                    onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                  >
                    <ArrowLogo
                      alt="Previous Page Button"
                      rotate={"90deg"}
                      src={Icons.ArrowIcon}
                    />
                  </ArrowContainer>
                  {currentPage}
                  <ArrowContainer
                    onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                  >
                    <ArrowLogo
                      alt="Next Page Button"
                      rotate={"270deg"}
                      src={Icons.ArrowIcon}
                    />
                  </ArrowContainer>
                </SelectPageContainer>
              </NavigationText>
            </Navigation>
          </NavigationWrapper>
        </NavigationContainer>
        <TableWrapper>
          <TableHead>
            <TableRowHeader>
              {buttonsArray &&
                buttonsArray.map((button) => (
                  <CoinButton
                    key={button}
                    sortCoins={sortCoins}
                    sortBy={sortBy}
                    sortType={sortType}
                    title={button}
                  />
                ))}
            </TableRowHeader>
          </TableHead>
          <TableBody>
            {isLoading
              ? data.map((coin) => <TableRow isLoading={isLoading} />)
              : data.map((coin) => (
                  <TableRow
                    key={coin.id}
                    coin={coin}
                    index={coin.market_cap_rank}
                    colors={percentageBarColors[coin.market_cap_rank % 10]}
                    isMobileView={isMobileView}
                  />
                ))}
          </TableBody>
        </TableWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <NavigationContainer>
        <NavigationWrapper>
          <NavigationHeader>
            <Navigation>
              <NavigationTitle>Filter by:</NavigationTitle>
              {categoriesArray &&
                categoriesArray.map((category) => (
                  <Buttons
                    key={category}
                    category={category}
                    activeCategory={activeCategory}
                    onClick={() => dispatch(setActiveCategory(category))}
                  >
                    {category.name}
                  </Buttons>
                ))}
            </Navigation>
          </NavigationHeader>
          <Navigation>
            <SelectRows showRows={showRows} />
            <NavigationText>
              <ShowRowsHeader>Page:</ShowRowsHeader>
              <SelectPageContainer>
                <ArrowContainer
                  onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                >
                  <ArrowLogo
                    alt="Previous Page Button"
                    rotate={"90deg"}
                    src={Icons.ArrowIcon}
                  />
                </ArrowContainer>
                {currentPage}
                <ArrowContainer
                  onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                >
                  <ArrowLogo
                    alt="Next Page Button"
                    rotate={"270deg"}
                    src={Icons.ArrowIcon}
                  />
                </ArrowContainer>
              </SelectPageContainer>
            </NavigationText>
          </Navigation>
        </NavigationWrapper>
      </NavigationContainer>
      <TableWrapper>
        <TableHead>
          <TableRowHeader>
            {buttonsArray &&
              buttonsArray.map((button) => (
                <CoinButton
                  key={button}
                  sortCoins={sortCoins}
                  sortBy={sortBy}
                  sortType={sortType}
                  title={button}
                />
              ))}
            <Title>24h Volume/Market Cap</Title>
            <Title>Circulating/Total Supply</Title>
            <Title>
              <CircleContainer>
                Last 7d
                <CircleIcon />
              </CircleContainer>
            </Title>
          </TableRowHeader>
        </TableHead>
        <TableBody>
          {isLoading
            ? data.map((coin) => <TableRow isLoading={isLoading} />)
            : data.map((coin) => (
                <TableRow
                  key={coin.id}
                  coin={coin}
                  index={coin.market_cap_rank}
                  colors={percentageBarColors[coin.market_cap_rank % 10]}
                  isMobileView={isMobileView}
                />
              ))}
        </TableBody>
      </TableWrapper>
    </Container>
  );
};

export default CoinTable;
