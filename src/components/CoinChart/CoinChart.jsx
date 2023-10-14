import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import {
  Container,
  ChartMenuContainer,
  ChartMenu,
  ContainerCirlce,
  ChartItem,
  ChartContainer,
} from "./CoinChart.styles";

Chart.register(...registerables);

const options = [
  {
    name: "1d",
    days: 1,
  },
  {
    name: "7d",
    days: 7,
  },
  {
    name: "30d",
    days: 30,
  },
  {
    name: "90d",
    days: 90,
  },
  {
    name: "1y",
    days: 365,
  },
  {
    name: "Max",
    days: "max",
  },
];

const chartOptions = {
  responsive: true,
  elements: {
    point: {
      radius: 1,
    },
  },
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        beginAtZero: true,
        display: false,
        maxTicksLimit: 5,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        beginAtZero: true,
        display: false,
        maxTicksLimit: 5,
      },
    },
  },
};

const CoinChart = ({ coin, currency, color, bgColor }) => {
  const [activeOption, setActiveOption] = useState({
    name: "1d",
    days: 1,
  });
  const [chartData, setChartData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleActiveOption = (item) => {
    setActiveOption(item);
  };

  const getData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency.name}&days=${activeOption.days}`
      );
      const dataStep = Math.ceil(data.prices.length / 80);
      const filteredData = data.prices.filter(
        (_, index) => index % dataStep === 0
      );
      const labels = filteredData.map((item) =>
        new Date(item[0]).toLocaleString(undefined, {
          month: "short",
          day: "numeric",
        })
      );

      const datasets = filteredData.map((item) => item[1]);

      const newChartData = {
        labels,
        datasets: [
          {
            data: datasets,
            fill: true,
            tension: 0.4,
            borderColor: bgColor,
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 340);
              gradient.addColorStop(0, color);
              gradient.addColorStop(1, bgColor);
              return gradient;
            },
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "#06d554",
          },
        ],
      };
      setChartData(newChartData);
    } catch (err) {
      setErrorMessage("There was an error loading the data.");
    }
  };

  useEffect(() => {
    getData();
  }, [activeOption]);

  useEffect(() => {
    getData();
  }, [color, bgColor]);

  return (
    <Container>
      <ChartMenuContainer>
        <ChartMenu>
          {options &&
            options.map((item) => (
              <ChartItem
                onClick={() => handleActiveOption(item)}
                activeOption={activeOption}
                key={item.name}
              >
                <ContainerCirlce item={item} activeOption={activeOption} />
                {item.name}
              </ChartItem>
            ))}
        </ChartMenu>
      </ChartMenuContainer>
      <ChartContainer>
        {chartData && <Line options={chartOptions} data={chartData} />}
      </ChartContainer>
    </Container>
  );
};

export default CoinChart;
