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
  MobileChartMenu,
} from "./CoinChart.styles";

Chart.register(...registerables);

const initialData = {
  labels: [
    "17 Oct",
    "17 Oct",
    "17 Oct",
    "17 Oct",
    "17 Oct",
    "17 Oct",
    "17 Oct",
    "17 Oct",
    "17 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
    "18 Oct",
  ],
  datasets: [
    {
      data: [
        28410.557374448555, 28468.776425510685, 28504.608796688077,
        28525.56019840001, 28531.13307151487, 28491.662926207293,
        28507.174282199438, 28536.571768839938, 28497.798657481482,
        28457.58906749564, 28497.325381128325, 28400.423999371484,
        28445.04802593707, 28434.701701395083, 28417.72175169982,
        28398.114662842887, 28398.03187207491, 28379.03659891238,
        28424.04276014809, 28357.644980084046, 28371.89935440702,
        28392.412739670224, 28473.27929141238, 28464.18242729767,
        28474.715970743924, 28470.568122216817, 28507.254216994752,
        28523.00249903532, 28465.271994793467, 28586.604664207985,
        28690.93080746341, 28732.33372677849, 28671.335987788614,
        28726.059147222662, 28673.88097805756, 28698.29225940087,
        28587.817322605493, 28580.9878847222, 28508.796702471795,
        28493.317176043507, 28531.800227316347, 28536.381480802975,
        28553.136167662866, 28603.886543115746, 28580.432716253803,
        28407.217158079162, 28360.011892566083, 28388.63124550834,
        28347.308027407118, 28385.537026362137, 28379.607272933554,
        28349.71477859239, 28413.640627534205, 28309.277088173247,
        28352.337342778796, 28361.61045654237, 28308.75047802354,
        28291.62945906185, 28269.540011958332, 28206.323566697505,
        28238.553413306025, 28272.28316233746, 28276.712172633892,
        28366.91077532553, 28321.020455670663, 28367.961124250745,
        28407.15925051227, 28400.267448467708, 28356.966143888243,
        28367.743910477377, 28382.59516835445, 28309.215314338242,
        28253.920233377044,
      ],
      fill: true,
      tension: 0.4,
      borderColor: "#404040",
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#06d554",
    },
  ],
};

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

const CoinChart = ({ coin, currency, color, bgColor, isLoading }) => {
  const [activeOption, setActiveOption] = useState({
    name: "1d",
    days: 1,
  });
  const [chartData, setChartData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleActiveOption = (item) => {
    if (isLoading === false) {
      setActiveOption(item);
    }
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
  }, [color, bgColor, currency]);

  useEffect(() => {
    if (isLoading) {
      setChartData(initialData);
    }
  }, [isLoading]);

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
