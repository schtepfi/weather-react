import React from "react";

export default function FormattedDate(props) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[props.date.getDay()];
    let date = props.date.getDate();
    let months = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12"
    ];
    let month = months[props.date.getMonth()]
    let year = props.date.getFullYear();

    return (
        <div>
            {day}, {date}.{month}.{year}
        </div>
    );
}