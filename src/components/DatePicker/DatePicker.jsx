import React from "react";
import { Container, Date } from "./DatePicker.styles";

const durations = [
  {
    name: "1d",
    days: 1,
  },
  {
    name: "1w",
    days: 7,
  },
  {
    name: "1m",
    days: 30,
  },
  {
    name: "3m",
    days: 90,
  },
  {
    name: "6m",
    days: 180,
  },
  {
    name: "1y",
    days: 365,
  },
];

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  state = {
    durations: null,
  };

  componentDidMount() {
    this.setState({ durations: durations });
  }

  handleDateChange(e) {
    const { changeDate } = this.props;
    const data = {
      name: e.target.getAttribute("name"),
      days: e.target.getAttribute("days"),
    };
    changeDate(data);
  }

  render() {
    const { durations } = this.state;
    const { date } = this.props;
    return (
      <Container>
        {durations &&
          durations.map((time) => (
            <Date
              date={date}
              name={time.name}
              days={time.days}
              onClick={this.handleDateChange}
            >
              {time.name}
            </Date>
          ))}
      </Container>
    );
  }
}
