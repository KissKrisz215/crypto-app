import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { ThemeContext } from "styled-components";
import {
  ChartContainer,
  ChartHeader,
  HeaderTitle,
  HeaderParagraph,
  SubTitle,
  ChartWrapper,
} from "./Chart.styles";
import { getTodayDate } from "../../../utils";
import DatePicker from "../DatePicker/DatePicker";
import { LoadingSpinner, LoadingBar } from "../../LoadingAnimations/";

Chart.register(...registerables);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  spanGaps: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      ticks: {
        align: "start",
        source: "auto",
        maxRotation: 0,
        autoSkip: true,
        maxTicksLimit: 7,
        font: {
          size: 11,
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        display: false,
        beginAtZero: true,
        maxTicksLimit: 4,
      },
    },
  },
};

const ChartItem = ({
  color,
  currency,
  type,
  data,
  date,
  info,
  title,
  changeDate,
}) => {
  const [chartData, setChartData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    if (data) {
      const labels = data.map((item) =>
        new Date(item[0]).toLocaleString(undefined, {
          month: "short",
          day: "numeric",
        })
      );
      const datasets = data.map((item) => item[1]);
      const newChartData = {
        labels,
        datasets: [
          {
            label: "",
            data: datasets,
            borderColor: color,
            borderRadius: 5,
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 420);
              gradient.addColorStop(0, color);
              gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
              return gradient;
            },
            lineTension: 0.5,
            pointRadius: 0,
            borderWidth: type === "line" ? 4 : 5,
            fill: true,
          },
        ],
      };
      setTimeout(() => {
        setChartData(newChartData);
        setIsLoading(false);
      }, 100);
    } else {
      setErrorMessage("There was an error loading chart data");
    }
  };

  useEffect(() => {
    loadData();
  }, [data, color, type]);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <>
          {isLoading ? (
            <ChartHeader>
              <LoadingBar width={"60px"} height={"30px"} />
              <LoadingBar width={"150px"} height={"30px"} />
              <LoadingBar width={"180px"} height={"30px"} />
            </ChartHeader>
          ) : (
            <ChartHeader>
              <HeaderTitle>{title}</HeaderTitle>
              {currency && <SubTitle>{currency.symbol + info}</SubTitle>}
              <HeaderParagraph>{getTodayDate()}</HeaderParagraph>
            </ChartHeader>
          )}
          <ChartContainer>
            <DatePicker date={date} changeDate={changeDate} />
            <ChartWrapper>
              {isLoading ? (
                <LoadingSpinner
                  width="100px"
                  height="100px"
                  border="12px"
                  color="#06d554"
                  borderColor={theme.navbarBrand}
                />
              ) : (
                chartData && (
                  <>
                    {type === "line" ? (
                      <Line data={chartData} options={options} />
                    ) : (
                      <Bar data={chartData} options={options} />
                    )}
                  </>
                )
              )}
            </ChartWrapper>
          </ChartContainer>
        </>
      )}
    </ThemeContext.Consumer>
  );
};

export default ChartItem;
