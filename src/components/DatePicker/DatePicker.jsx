import React, { useEffect, useState } from "react";
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

const DatePicker = ({ date, changeDate }) => {
  const [durationsState, setDurations] = useState(null);

  useEffect(() => {
    setDurations(durations);
  }, []);

  const handleDateChange = (e) => {
    const data = {
      name: e.target.getAttribute("name"),
      days: e.target.getAttribute("days"),
    };
    changeDate(data);
  };

  return (
    <Container>
      {durationsState &&
        durationsState.map((time) => (
          <Date
            key={time.name}
            date={date}
            name={time.name}
            days={time.days}
            onClick={handleDateChange}
          >
            {time.name}
          </Date>
        ))}
    </Container>
  );
};

export default DatePicker;
