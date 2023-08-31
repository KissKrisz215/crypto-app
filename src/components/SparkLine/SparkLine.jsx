import React from "react";
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

export default class SparkLine extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const labelsArray = Array(this.props.data.length).join(" ").split(" ");
    const { data, priceChangePercentage } = this.props;
    const chartData = {
      labels: labelsArray,
      datasets: [
        {
          label: "",
          data: data,
          tension: 0.1,
          borderColor: priceChangePercentage > 0 ? "#00FC2A" : "#FE1040",
          fill: false,
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent",
        },
      ],
    };
    this.setState({ data: chartData });
  }

  render() {
    return (
      <Container>
        {this.state.data && (
          <Line
            width="140px"
            height="70px"
            data={this.state.data}
            options={options}
          />
        )}
      </Container>
    );
  }
}
