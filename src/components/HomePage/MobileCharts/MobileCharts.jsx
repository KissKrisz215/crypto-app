import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "styled-components";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import {
  ChartsMobileContainer,
  ButtonContainer,
  CustomButtonNext,
  CustomButtonBack,
  ChartsContainer,
  ChartWrapper,
} from "./MobileCharts.styles";
import { ErrorContainer, ErrorMessage } from "../../../pages/Home/Home.styles";
import ChartItem from "../../../components/HomePage/Chart";
import "pure-react-carousel/dist/react-carousel.es.css";

const MobileCharts = ({
  errorMessage,
  currency,
  pricesData,
  currencyPrice,
  pricesDate,
  setPricesDate,
  marketData,
  currencyVolume,
  marketDate,
  setMarketDate,
}) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <ChartsMobileContainer>
          <ChartsContainer>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={85}
              totalSlides={2}
            >
              <Slider style={{ height: "400px" }}>
                <Slide index={0}>
                  <ChartWrapper>
                    {errorMessage && (
                      <ErrorContainer>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                      </ErrorContainer>
                    )}
                    {pricesData && (
                      <ChartItem
                        currency={currency}
                        data={pricesData}
                        type="line"
                        color={theme.chart1}
                        title="BTC"
                        info={currencyPrice}
                        date={pricesDate.name}
                        changeDate={setPricesDate}
                      />
                    )}
                  </ChartWrapper>
                </Slide>
                <Slide index={1}>
                  <ChartWrapper>
                    {errorMessage && (
                      <ErrorContainer>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                      </ErrorContainer>
                    )}
                    {marketData && (
                      <ChartItem
                        currency={currency}
                        data={marketData}
                        type="bar"
                        color={theme.chart2}
                        title="BTC Volume"
                        info={currencyVolume}
                        date={marketDate.name}
                        changeDate={setMarketDate}
                      />
                    )}
                  </ChartWrapper>
                </Slide>
              </Slider>
              <ButtonContainer>
                <CustomButtonBack>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </CustomButtonBack>
                <CustomButtonNext>
                  <FontAwesomeIcon icon={faChevronRight} />
                </CustomButtonNext>
              </ButtonContainer>
            </CarouselProvider>
          </ChartsContainer>
        </ChartsMobileContainer>
      )}
    </ThemeContext.Consumer>
  );
};

export default MobileCharts;
