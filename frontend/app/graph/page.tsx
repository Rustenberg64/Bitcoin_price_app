"use client";
import { NextPage } from "next";
import dynamic from "next/dynamic";
// import App from "./App";
import {
  Button,
  Container,
  Grid,
  TextField,
  formControlClasses,
} from "@mui/material";
import { useEffect, useState } from "react";

type params1 = {
  place: String;
  date_from: String;
  date_to: String;
  interval: Number;
};

type params2 = {
  place_list: Array<String>;
  date_from: String;
  date_to: String;
  interval: Number;
};

const place_list = ["Binance", "Coincheck", "bitFlyer"];

const getData = async ({ place, date_from, date_to, interval }: params1) => {
  date_from = date_from.replace("+", "%2B");
  date_to = date_to.replace("+", "%2B");
  const url = new URL(
    `http://localhost:4000/api/v1/bitcoin_prices?place=${place}&from=${date_from}&to=${date_to}&interval=${interval}`
  );
  // console.log(url)
  // const url =  "http://localhost:4000/api/v1/bitcoin_prices?place=coincheck&from=2023-07-01T12:34:56%2B09:00&to=2024-08-31T12:34:56%2B09:00&interval=1"
  const response = await fetch(url);
  const res = await response.json();
  return res;
};

const getAllData = ({ place_list, date_from, date_to, interval }: params2) => {
  const list = place_list.map(async (place) => {
    const res = getData({
      place: place,
      date_from: date_from,
      date_to: date_to,
      interval: interval,
    });
    return res;
  });
  return list;
};

const convertToiso8601 = (date: Date) => {
  date.setSeconds(0);
  date.setMilliseconds(0);
  date.setHours(date.getHours() + 9);
  const simple_date = date.toISOString().replace(/.[0-9]{3}Z/g, "") + "+09:00";
  return simple_date;
};

const now = new Date();
const past = new Date(now);
const date_to = convertToiso8601(now);
past.setDate(past.getDate() - 1);
const date_from = convertToiso8601(past);

const initParams = {
  place_list: place_list,
  date_from: date_from,
  date_to: date_to,
  interval: 1,
};

export default function Sample() {
  const [timescale, setTimescale] = useState("24h");
  const [series, setSeries] = useState([
    [{ place: "1" }],
    [{ place: "2" }],
    [{ place: "3" }],
  ]);
  const [params, setParams] = useState(initParams);

  useEffect(() => {
    const func = async () => {
      const data = await Promise.all(getAllData(params));
      console.log(data);
      setSeries(data);
    };
    func();
  }, [timescale]);

  const clickHandler = async () => {
    // const res = await getData({});
    // const obj = {name: "new", data: res}
    // setSeries(obj);
    await setTimescale((prev) => prev + "1");
  };

  const App = dynamic(() => import("./App"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
  });
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <h1>Bitcoin Price Tracker</h1>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <h2>Compare exchange rate Bitcoin to JPY with Binance, Coincheck and bitFlyer</h2>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <TextField
              id="date_from"
              label="date_from"
              margin="normal"
              // fullWidth
              defaultValue={params.date_from}
            />
          </Grid>
          <Grid item>
            <TextField
              id="date_to"
              label="date_to"
              margin="normal"
              // fullWidth
              defaultValue={params.date_to}
            />
          </Grid>
          <Grid item>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              id="interval"
              label="interval"
              margin="normal"
              // fullWidth
              defaultValue={params.interval}
            />
          </Grid>
          <Grid item>
            <Button variant="contained">Reload</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Reset</Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <h3>
              Date: {params.date_from} - {params.date_to}
            </h3>
          </Grid>
          <Grid item>
            <h3>Interval: {params.interval} min</h3>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <App series={series} />
        </Grid>
      </Grid>
    </>
  );
}
