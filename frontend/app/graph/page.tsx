"use client"
import { NextPage } from "next";
import dynamic from "next/dynamic";
// import App from "./App";
import { Button, formControlClasses } from "@mui/material";
import { useEffect, useState } from "react";

type params1 = {
  place: String,
  date_from: String,
  date_to: String,
  interval: Number,
}

type params2 = {
  place_list: Array<String>
  date_from: String,
  date_to: String,
  interval: Number,
}

const place_list = ["binance", "coincheck", "bitflyer"]

const getData =  async ({place , date_from , date_to , interval }: params1) => {
  const url = new URL(`http://localhost:4000/api/v1/bitcoin_prices?place=${place}&from=${date_from}&to=${date_to}&interval=${interval}`)
  console.log(url)
  // const url =  "http://localhost:4000/api/v1/bitcoin_prices?place=coincheck&from=2023-07-01T12:34:56%2B09:00&to=2024-08-31T12:34:56%2B09:00&interval=1"
  const response = await fetch(url);
  const res = await response.json();
  return res;
}

const getAllData = ({place_list , date_from , date_to , interval }: params2) => {
  const list = place_list.map( async (place) =>{
    const res = getData({place: place, date_from: date_from, date_to: date_to, interval: interval});
    return res;
  })
  return list;
}

const now = new Date();
const past = new Date(now);
const date_to = (now.toISOString().replace(/.[0-9]{3}Z/g, "") + '+00:00').replace("+","%2B");
past.setDate(past.getDate() - 1);
const date_from = (past.toISOString().replace(/.[0-9]{3}Z/g, "") + '+00:00').replace("+","%2B");

const initParams = {
  place_list: place_list,
  date_from: date_from,
  date_to: date_to,
  interval: 1
}

export default function Sample(){

  const [timescale, setTimescale] = useState("24h");
  const [series, setSeries] = useState([[{place: "1"}],[{place: "2"}],[{place: "3"}]]);
  const [params, setParams] = useState(initParams);

  useEffect( ()=>{
    const func = async() => {
      const data = await Promise.all(getAllData(params));
      console.log(data);
      setSeries(data);
    }
    func()
  },[timescale])

  const clickHandler = async() => {
    // const res = await getData({});
    // const obj = {name: "new", data: res}
    // setSeries(obj);
    await setTimescale(prev => prev + '1');
  }

  const App = dynamic(() => import("./App"), { ssr: false, loading: () => <div>Loading...</div> });
  return(
    <>
    <Button onClick={clickHandler}>aa</Button>
    {timescale}
    console.log(series);
    <App series={series}/>
    </>
  )
}

