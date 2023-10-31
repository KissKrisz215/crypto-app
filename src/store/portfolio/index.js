const initialState = {
  data: [
    {
      currency: {
        name: "usd",
        symbol: "$",
        isActive: true,
      },
      purchasePrice: "26000",
      purchaseDate: "2023-10-16",
      purchaseAmount: 0.9156541644655749,
      data: {
        id: "bitcoin",
        name: "Bitcoin",
        api_symbol: "bitcoin",
        symbol: "BTC",
        market_cap_rank: 1,
        thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
        large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      },
      id: "9sv0h5Dk0W_wPACtFvV7r",
    },
    {
      currency: {
        name: "usd",
        symbol: "$",
        isActive: true,
      },
      purchasePrice: "1600",
      purchaseDate: "2020-01-02",
      purchaseAmount: 1.0045329549592537,
      data: {
        id: "ethereum",
        name: "Ethereum",
        api_symbol: "ethereum",
        symbol: "ETH",
        market_cap_rank: 2,
        thumb:
          "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
        large:
          "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
      },
      id: "HRCsj7skzlVM-VW8W0HkT",
    },
  ],
};

export const SET_PORTFOLIO_DATA = "SET_PORTFOLIO_DATA";

function portfolioDataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PORTFOLIO_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
}

export default portfolioDataReducer;
