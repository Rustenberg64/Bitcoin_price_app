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

const xaxis_formatter = (value: string) => {
  const date = new Date(value);
  const minutes = date.getMinutes();
  const tick = `${date.getMonth()}/${date.getDate()} ${date.getHours()}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  return tick;
};

export default function App({ series }: { series: Array<any> }) {
  const color = ["#FF4B00", "#03AF7A", "#005AFF"];
  return (
    <ResponsiveContainer width="100%" height={700}>
      <LineChart margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="requestedAt"
          type="category"
          allowDuplicatedCategory={false}
          tickFormatter={xaxis_formatter}
          minTickGap={40}
        />
        <YAxis dataKey="ltp" domain={["auto", "auto"]} />
        <Tooltip />
        <Legend verticalAlign="top" height={36} iconSize={25} />
        {series.map((s: Array<any>, i: number) => {
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
        {/* <Line dataKey="ltp" data={series.data} name={series.place} key={series.place} /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}
