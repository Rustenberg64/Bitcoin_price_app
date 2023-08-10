"use client"
import { NextPage } from "next";
import dynamic from "next/dynamic";
import App from "./App";
import { Button } from "@mui/material";
import { useState } from "react";

const getData =  async () => {
  const response = await fetch("http://localhost:3000/api/v1/bitcoin_prices?place=coincheck&from=2023-07-01T12:34:56%2B09:00&to=2024-08-31T12:34:56%2B09:00&interval=1");
  const res = await response.json();
  return res;
}


export default function Sample(){
  const [data, setData] = useState();

  const clickHandler = async() => {
    const res = await getData();
    setData(res);
  }

  return(
    <>
    <Button onClick={clickHandler}>aa</Button>
    {data}
    </>
  )
}

// export default function MyFunnel(){
//   return (
//     <>
//       {/* <FunnelChart width={730} height={250}>
//         <Tooltip />
//         <Funnel dataKey="value" data={data} isAnimationActive>
//           <LabelList
//             position="right"
//             fill="#000"
//             stroke="none"
//             dataKey="name"
//           />
//         </Funnel>
//       </FunnelChart> */}
//       <App />
//     </>
//   );
// };
