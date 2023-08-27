import axios from "axios";
import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import {
  ChartContainer,
  ChartHeader,
  HeaderTitle,
  HeaderParagraph,
  SubTitle,
} from "./Chart.styles";
import { getTodayDate } from "../../utils";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
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
        maxTicksLimit: 2,
      },
    },
  },
};

export default class ChartItem extends React.Component {
  state = {
    data: null,
    errorMessage: null,
    color: null,
    currency: {
      name: "",
    },
  };

  loadData() {
    if (this.props.data) {
      const labels = this.props.data.map((item) =>
        new Date(item[0]).toLocaleString(undefined, {
          month: "short",
          day: "numeric",
        })
      );
      const datasets = this.props.data.map((item) => item[1]);
      const data = {
        labels,
        datasets: [
          {
            label: "",
            data: datasets,
            borderColor: this.props.color,
            borderRadius: 4,
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 420);
              gradient.addColorStop(0, this.props.color);
              gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
              return gradient;
            },
            pointRadius: 0,
            borderWidth: this.props.type === "line" ? 4 : 12,
            fill: true,
          },
        ],
      };
      this.setState({ data: data });
    } else {
      this.setState({ errorMessage: "There was an error loading chart data" });
    }
  }

  componentDidMount() {
    this.setState({
      color: this.props.color,
      currency: this.props.currency,
    });
    this.loadData();
  }
  componentDidUpdate() {
    if (this.props.currency.name !== this.state.currency.name) {
      this.setState({ currency: this.props.currency });
      this.loadData();
    }

    if (this.state.color !== this.props.color) {
      this.setState({ color: this.props.color });
      this.loadData();
    }
  }

  render() {
    return (
      <>
        <ChartHeader>
          <HeaderTitle>{this.props.title}</HeaderTitle>
          <SubTitle>{this.props.currency.symbol + this.props.info}</SubTitle>
          <HeaderParagraph>{getTodayDate()}</HeaderParagraph>
        </ChartHeader>
        <ChartContainer>
          {this.state.data && (
            <>
              {this.props.type === "line" ? (
                <Line data={this.state.data} options={options} />
              ) : (
                <Bar data={this.state.data} options={options} />
              )}
            </>
          )}
        </ChartContainer>
      </>
    );
  }
}
