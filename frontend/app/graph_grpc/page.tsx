"use client";
import dynamic from "next/dynamic";
// import App from "./App";
import {
  AppBar,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  List,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";

global.XMLHttpRequest = require('xhr2');
import * as grpcWeb from 'grpc-web';
import {SearchPriceClient} from './Bitcoin_infoServiceClientPb';
import {PriceRequest, Prices} from './bitcoin_info_pb';

const App = dynamic(() => import("./App"), {
  ssr: false,
  loading: () => <CircularProgress />,
});

type params1 = {
  place: string;
  date_from: string;
  date_to: string;
  interval: number;
};

type params2 = {
  place_list: Array<string>;
  date_from: string;
  date_to: string;
  interval: number;
};

const place_list = ["Binance", "Coincheck", "bitFlyer"];

const iso8601_regexp =
  /\d{4}[-]\d{2}[-]\d{2}[T]\d{2}[:]\d{2}[:]\d{2}[+]\d{2}[:]\d{2}/;

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
  past.setHours(past.getHours() - 6);
  const date_from = convertToiso8601(past);
  return { date_from, date_to };
};

export default function Sample() {
  const initParams = {
    place_list: place_list,
    ...getDatefrom_Dateto(),
    interval: 1,
  };
  const grpc_url =`${window.location.protocol}//${window.location.hostname}:10000`
  const serchService = new SearchPriceClient(grpc_url,null,null);
  // const serchService = new SearchPriceClient('http://localhost:10000',null,null);
  const getDatabygRPC = async ({ place, date_from, date_to, interval }: params1) => {
    const request = new PriceRequest();
    // request.setDateFrom('2023-08-19T11:01:00+09:00');
    // request.setDateTo('2023-08-21T17:01:00+09:00');
    // request.setPlace('Coincheck');
    // request.setInterval(1);
    request.setDateFrom(date_from);
    request.setDateTo(date_to);
    request.setPlace(place);
    request.setInterval(interval);
    const response = await serchService.getPrices(request, {'custom-header-1': 'value1'})
    return response.toObject().pricesList;
  };
  
  const getAllDatabygRPC = ({ place_list, date_from, date_to, interval }: params2) => {
    const list = place_list.map( (place) => {
      const res = getDatabygRPC({
        place,
        date_from,
        date_to,
        interval,
      });
      return res;
    });
    return list;
  };

  const [series, setSeries] = useState([[{}], [{}], [{}]]);
  const [params, setParams] = useState(initParams);
  const [tmp_params, setTmpparams] = useState(initParams);

  useEffect(() => {
    const func_grpc = async () => {
      const data = await Promise.all(getAllDatabygRPC(params));
      // console.log(data);
      setSeries(data);
      console.log(series);
    };
    func_grpc();
  }, [params]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Bitcoin Price Tracker</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {/* sx={{
        backgroundColor: "#f5f5f5"
      }} */}
        <Toolbar />
        {/* <h2>
          Compare exchange rate Bitcoin to JPY with Binance, Coincheck and
          bitFlyer
        </h2> */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid
            container
            item
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <TextField
                // helperText={tmp_params.date_from.match(iso8601_regexp) ? false : "invalid"}
                error={
                  tmp_params.date_from.match(iso8601_regexp) ? false : true
                }
                id="date_from"
                label="date_from"
                margin="normal"
                // defaultValue={params.date_from}
                value={tmp_params.date_from}
                onChange={(e) => {
                  setTmpparams({ ...tmp_params, date_from: e.target.value });
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                error={tmp_params.date_to.match(iso8601_regexp) ? false : true}
                id="date_to"
                label="date_to"
                margin="normal"
                // defaultValue={params.date_to}
                value={tmp_params.date_to}
                onChange={(e) => {
                  setTmpparams({ ...tmp_params, date_to: e.target.value });
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                error={
                  tmp_params.interval >= 1 && tmp_params.interval <= 60
                    ? false
                    : true
                }
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                id="interval"
                label="interval"
                margin="normal"
                // defaultValue={params.interval}
                value={tmp_params.interval}
                onChange={(e) => {
                  setTmpparams({
                    ...tmp_params,
                    interval: parseInt(e.target.value, 10) || 0,
                  });
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
                  const date_obj = getDatefrom_Dateto();
                  setTmpparams({ ...initParams, ...date_obj });
                  setParams({ ...initParams, ...date_obj });
                }}
              >
                Fetch Latest
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h6">
                Date: {params.date_from} - {params.date_to}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Interval: {params.interval} min
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent="center" alignItems="center">
            <App series={series} />
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          sx={{
            paddingTop: 4,
          }}
        >
          Description
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItemText sx={{ display: "list-item" }}>
            Binace, Coincheck,
            bitFlyerの3つの取引所でのBitcoinとJPYの取引価格を確認できます
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            データは外部APIを呼び出して1分ごとに取得し、データベースに保存したものを用いています
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            date_fromは開始日、date_toは終了日を表しており、その期間でデータを取得し描画します
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            date_from、date_toはiso8601の形式で設定してください
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            intervalはデータの時間間隔を表し、1 -
            60分のうち60の約数であるものを指定できます
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            青色の&quot;FETCH&quot;ボタンを押すことで設定したパラメータでグラフを描画します
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            &quot;FETCH
            LATEST&quot;ボタンを押すことで現在から過去6時間分の1分間隔のデータを描画します
          </ListItemText>
          <ListItemText sx={{ display: "list-item" }}>
            各時刻以前の最終取引価格を表しており、時間的に変化がない場合は取引が行われていない可能性があります
          </ListItemText>
        </List>
      </Container>
    </>
  );
}
