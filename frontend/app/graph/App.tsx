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

export default function App({ series }: { series: Array<any> }) {
  const color = ["#FF4B00", "#03AF7A", "#005AFF"];
  return (
    <ResponsiveContainer width="80%" height={700}>
      <LineChart margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="requested_at"
          type="category"
          allowDuplicatedCategory={false}
        />
        <YAxis dataKey="ltp" domain={["auto", "auto"]} />
        <Tooltip />
        <Legend verticalAlign="top" height={36} iconSize={25} />
        {series.map((s: Array<any>, i: number) => (
          <Line
            dataKey="ltp"
            data={s}
            name={s[0].place}
            key={s[0].place}
            stroke={color[i]}
          />
        ))}
        {/* <Line dataKey="ltp" data={series.data} name={series.place} key={series.place} /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}
