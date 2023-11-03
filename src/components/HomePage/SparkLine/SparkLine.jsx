import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Container } from "./SparkLine.styles";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  animation: {
    duration: 2000,
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },
};

const SparkLine = ({ data, priceChangePercentage }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const labelsArray = Array(data.length).join(" ").split(" ");
    const chartData = {
      labels: labelsArray,
      datasets: [
        {
          label: "",
          data: data,
          tension: 0.5,
          borderColor: priceChangePercentage > 0 ? "#00FC2A" : "#FE1040",
          fill: false,
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent",
        },
      ],
    };
    setChartData(chartData);
  }, [data, priceChangePercentage]);

  return (
    <Container>
      {chartData && (
        <Line width="140px" height="70px" data={chartData} options={options} />
      )}
    </Container>
  );
};

export default SparkLine;
