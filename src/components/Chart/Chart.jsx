import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { ThemeContext } from "styled-components";
Chart.register(...registerables);
import {
  ChartContainer,
  ChartHeader,
  HeaderTitle,
  HeaderParagraph,
  SubTitle,
  ChartWrapper,
} from "./Chart.styles";
import { getTodayDate } from "../../utils";
import DatePicker from "../DatePicker/DatePicker";
import { LoadingSpinner } from "../LoadingAnimations/";

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

class ChartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      errorMessage: null,
      color: null,
      currency: { name: "" },
      isLoading: true,
    };
  }

  loadData = async () => {
    const { data, color, type } = this.props;

    if (data) {
      const labels = data.map((item) =>
        new Date(item[0]).toLocaleString(undefined, {
          month: "short",
          day: "numeric",
        })
      );
      const datasets = data.map((item) => item[1]);
      const chartData = {
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
        this.setState({ data: chartData, isLoading: false });
      }, 100);
    } else {
      this.setState({ errorMessage: "There was an error loading chart data" });
    }
  };

  componentDidMount() {
    const { color, currency } = this.props;
    this.setState({ color: color, currency });
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { color, currency, data } = this.props;

    if (currency.name !== this.state.currency.name) {
      this.setState({ currency });
      this.loadData();
    }

    if (color !== this.state.color) {
      this.setState({ color: color });
      this.loadData();
    }

    if (data !== prevProps.data) {
      this.loadData();
    }
  }

  render() {
    const { title, info, type, date, changeDate } = this.props;
    const { data, currency, isLoading } = this.state;

    return (
      <>
        <ThemeContext.Consumer>
          {(theme) => (
            <>
              <ChartHeader>
                <HeaderTitle>{title}</HeaderTitle>
                {currency && <SubTitle>{currency.symbol + info}</SubTitle>}
                <HeaderParagraph>{getTodayDate()}</HeaderParagraph>
              </ChartHeader>
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
                    data && (
                      <>
                        {type === "line" ? (
                          <Line data={data} options={options} />
                        ) : (
                          <Bar data={data} options={options} />
                        )}
                      </>
                    )
                  )}
                </ChartWrapper>
              </ChartContainer>
            </>
          )}
        </ThemeContext.Consumer>
      </>
    );
  }
}

export default ChartItem;
