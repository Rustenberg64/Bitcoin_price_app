"use client";
import dynamic from "next/dynamic";
// import App from "./App";
import { Button, CircularProgress, Grid, TextField } from "@mui/material";
import { useEffect, useLayoutEffect, useState } from "react";

const App = dynamic(() => import("./App"), {
  ssr: false,
  loading: () => <CircularProgress />,
});

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
  // const url =  "http://localhost:4000/api/v1/bitcoin_prices?place=coincheck&from=2023-07-01T12:34:56%2B09:00&to=2024-08-31T12:34:56%2B09:00&interval=1"
  const response = await fetch(url);
  const res = await response.json();
  return res;
};

const getAllData = ({ place_list, date_from, date_to, interval }: params2) => {
  const list = place_list.map(async (place) => {
    const res = getData({
      place,
      date_from,
      date_to,
      interval,
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

const getDatefrom_Dateto = () => {
  const now = new Date();
  const past = new Date(now);
  const date_to = convertToiso8601(now);
  past.setHours(past.getHours() - 3);
  const date_from = convertToiso8601(past);
  return { date_from, date_to };
};

export default function Sample() {
  const initParams = {
    place_list: place_list,
    ...getDatefrom_Dateto(),
    interval: 1,
  };
  
  const [series, setSeries] = useState([
    [{ place: "1" }],
    [{ place: "2" }],
    [{ place: "3" }],
  ]);
  const [params, setParams] = useState(initParams);
  const [tmp_params, setTmpparams] = useState(initParams);

  useEffect(() => {
    const func = async () => {
      const data = await Promise.all(getAllData(params));
      console.log(data);
      setSeries(data);
    };
    func();
  }, [params]);

  // const App = dynamic(() => import("./App"), {
  //   ssr: false,
  //   loading: () => <div>Loading...</div>,
  // });
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <h1>Bitcoin Price Tracker</h1>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <h2>
              Compare exchange rate Bitcoin to JPY with Binance, Coincheck and
              bitFlyer
            </h2>
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
              onChange={(e) => {
                setTmpparams({ ...tmp_params, date_from: e.target.value });
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="date_to"
              label="date_to"
              margin="normal"
              // fullWidth
              defaultValue={params.date_to}
              onChange={(e) => {
                setTmpparams({ ...tmp_params, date_to: e.target.value });
              }}
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
              onChange={(e) => {
                setTmpparams({ ...tmp_params, interval: Number(e.target.value) });
              }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                setParams(tmp_params);
              }}
            >
              Fetch
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              onClick={() => {
                setParams({ ...initParams, ...getDatefrom_Dateto() });
              }}
            >
              Fetch Latest
            </Button>
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
