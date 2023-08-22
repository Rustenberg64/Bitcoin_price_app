import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type respnse_type ={
  place: string,
  ltp: number,
  requested_at: string
}
const xaxis_formatter = (value: string) => {
  const date = new Date(value);
  const minutes = date.getMinutes();
  const tick = `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  return tick;
};

const setXaxisDatakey = (obj : respnse_type) => {
  const unixtime = new Date(obj.requested_at).getTime();
  return unixtime
}

const labelFormatter = (unixtime : number) => {
  const date = new Date(unixtime)
  date.setHours(date.getHours() + 9);
  const label = date.toISOString().replace(/[.]\d{3}[Z]/,'+09:00');
  return label;
}

export default function App({ series }: { series: Array<Array<respnse_type>> }) {
  const color = ["#FF4B00", "#03AF7A", "#005AFF"];
  return (
    <ResponsiveContainer aspect={1.62}>
      <LineChart margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={setXaxisDatakey}
          type="number"
          interval="preserveEnd"
          tickFormatter={xaxis_formatter}
          tickCount={10}
          minTickGap={20}
          allowDecimals={false}
          domain={['dataMin', 'dataMax']}
        />
        <YAxis dataKey="ltp" domain={["auto", "auto"]} />
        <Tooltip labelFormatter={labelFormatter}/>
        <Legend verticalAlign="top" height={36} iconSize={25} />
        {series.map((s: Array<respnse_type>, i: number) => {
          return (
            <Line
              dataKey="ltp"
              data={s}
              name={s[0]?.place || "No Data"}
              key={s[0]?.place || "No Data"}
              stroke={color[i]}
              dot={false}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}
