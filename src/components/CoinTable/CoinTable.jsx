import React from "react";
import axios from "axios";
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
} from "./CoinTable.styles";
import CoinButton from "../CoinButton/CoinButton";
import TableRow from "../TableRow/TableRow";
import percentageBarColors from "../../utils/PercentageBarColors";
import SelectRows from "../SelectRows/";
import Icons from "../../assets/index";

const buttonsArray = ["#", "Name", "Price", "1h%", "24h%", "7d%"];
const categoriesArray = [
  { name: "Cryptocurrency", category: null },
  { name: "DeFi", category: "decentralized-finance-defi" },
  { name: "NFTs", category: "non-fungible-tokens-nft" },
  { name: "Metaverse", category: "metaverse" },
];
export default class CoinTable extends React.Component {
  state = {
    data: [],
    errorMessage: null,
  };

  sortByName() {
    const dataArray = JSON.parse(JSON.stringify(this.state.data));
    let data1;

    if (this.props.sortType === true) {
      data1 = dataArray.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      data1 = dataArray.sort((a, b) => a.name.localeCompare(b.name));
    }

    this.setState({ data: data1 });
  }

  sortByPrice() {
    const dataArray = JSON.parse(JSON.stringify(this.state.data));
    let data1;

    if (this.props.sortType === true) {
      data1 = dataArray.sort((a, b) => b.current_price - a.current_price);
    } else {
      data1 = dataArray.sort((a, b) => a.current_price - b.current_price);
    }

    this.setState({ data: data1 });
  }

  sortByHour(time) {
    const timeValue = time.replace(/%/g, "");
    const dataArray = JSON.parse(JSON.stringify(this.state.data));
    let data1;
    if (this.props.sortType === true) {
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

    this.setState({ data: data1 });
  }

  defaultSort() {
    const dataArray = JSON.parse(JSON.stringify(this.state.data));
    let data1;
    if (this.props.sortType === true) {
      data1 = dataArray.sort((a, b) => b.market_cap_rank - a.market_cap_rank);
    } else {
      data1 = dataArray.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
    }
    this.setState({ data: data1 });
  }

  handleSort() {
    if (this.props.sortBy === "Name") {
      this.sortByName();
    } else if (this.props.sortBy === "Price") {
      this.sortByPrice();
    } else if (
      this.props.sortBy === "1h%" ||
      this.props.sortBy === "24h%" ||
      this.props.sortBy === "7d%"
    ) {
      this.sortByHour(this.props.sortBy);
    } else {
      this.defaultSort();
    }
  }

  async getCoins() {
    try {
      const { activeCategory, showRows, currentPage } = this.props;
      let category;
      if (activeCategory) {
        category = activeCategory.category;
      }
      console.log("Called getcoins", category);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd${
          category ? `&category=${category}&` : "&"
        }order=market_cap_desc&per_page=${showRows}&page=${currentPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({ data });
    } catch (err) {
      console.log(err);
      this.setState({ errorMessage: "There was an error loading the data." });
    }
  }

  componentDidMount() {
    this.getCoins();
  }

  componentDidUpdate(prevProps) {
    const { sortBy, sortType, activeCategory } = prevProps;
    if (this.props.sortBy !== sortBy || this.props.sortType !== sortType) {
      this.handleSort();
    }

    if (this.props.activeCategory.name !== activeCategory.name) {
      this.getCoins();
    }
  }

  render() {
    const { data } = this.state;
    const {
      sortCoins,
      sortBy,
      sortType,
      activeCategory,
      changeActiveCategory,
      showRows,
      handleShowRowsChange,
      currentPage,
      changeCurrentPage,
    } = this.props;

    return (
      <Container>
        <NavigationContainer>
          <NavigationWrapper>
            <Navigation>
              <NavigationTitle>Filter by:</NavigationTitle>
              {categoriesArray &&
                categoriesArray.map((category) => (
                  <Buttons
                    key={category}
                    category={category}
                    activeCategory={activeCategory}
                    onClick={() => changeActiveCategory(category)}
                  >
                    {category.name}
                  </Buttons>
                ))}
            </Navigation>
            <Navigation>
              <SelectRows
                showRows={showRows}
                handleShowRowsChange={handleShowRowsChange}
              />
              <NavigationText>
                Page:
                <SelectPageContainer>
                  <ArrowContainer
                    onClick={() => changeCurrentPage(currentPage - 1)}
                  >
                    <ArrowLogo rotate={"90deg"} src={Icons.ArrowIcon} />
                  </ArrowContainer>
                  {currentPage}
                  <ArrowContainer
                    onClick={() => changeCurrentPage(currentPage + 1)}
                  >
                    <ArrowLogo rotate={"270deg"} src={Icons.ArrowIcon} />
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
            {this.state.data &&
              this.state.data.map((coin) => (
                <TableRow
                  key={coin.id}
                  coin={coin}
                  index={coin.market_cap_rank}
                  colors={percentageBarColors[coin.market_cap_rank % 10]}
                />
              ))}
          </TableBody>
        </TableWrapper>
      </Container>
    );
  }
}
