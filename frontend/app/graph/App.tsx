import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function App({series}) {
  const color = ["#8884d8","#8884d8","#3182bd"];
  return (
    <LineChart width={800} height={800}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="requested_at"
        type="category"
        allowDuplicatedCategory={false}
      />
      <YAxis 
        dataKey="ltp"
        domain={['auto', 'auto']} />
      <Tooltip />
      <Legend />
      {series.map((s, i) => (
        <Line dataKey="ltp" data={s} name={s[0].place} key={s[0].place} stroke={color[i]} />
      ))}
      {/* <Line dataKey="ltp" data={series.data} name={series.place} key={series.place} /> */}
    </LineChart>
  );
}
