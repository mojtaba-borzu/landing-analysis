import React, { PureComponent, useState } from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 4000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 5500,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g className="py-[5px]" transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={8}
          dy={6}
          textAnchor="end"
          fill="#666"
          transform="rotate(-25)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default function BarCharts() {
  const [yearIndex, setYearIndex] = useState(0);

  // let a =
  //   portfoliTtrackerRequestResult.data?.monthly_return[
  //     Object.keys(portfoliTtrackerRequestResult?.data?.monthly_return)[
  //       Object.keys(portfoliTtrackerRequestResult?.data?.monthly_return).map(
  //         (key, index) => index
  //       )
  //     ]
  //   ]

  // let b = Object.keys(portfoliTtrackerRequestResult?.data?.monthly_return).map(
  //   (key, index) => key
  // )

  //
  // }
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          {/* <ReferenceLine y={0} stroke="#FF5733" /> */}
          <Bar barSize={10} radius={10} dataKey="pv" s="#009519">
            {data.map((datum, entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={datum.value >= 0 ? "#009519 " : "#46BCFD"}
              />
            ))}
          </Bar>

          <Bar barSize={10} radius={10} dataKey="uv" s="#009519">
            {data.map((datum, entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={datum.value >= 0 ? "#009519 " : "#344767 "}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {/* <div className="w-full h-[50px] flex flex-row justify-center pb-[10px] gap-2">
        {b.map((item, index) => (
          <div
            onClick={() => {
              setYearIndex(index)
            }}
            key={index}
            className={`w-[150px] h-[30px] border-2  rounded-lg flex justify-center items-center cursor-pointer ${
              yearIndex == index
                ? 'bg-[#F8FAFD] border-[#000000] text-[#0066FF]'
                : 'border-gray-100 text-gray-500'
            }`}
          >
            {item}
          </div>
        ))}
      </div> */}
    </div>
  );
}

function generatChart(gragh, yearIndex) {
  let newGargh =
    gragh.data?.monthly_return &&
    gragh.data?.monthly_return[
      Object.keys(gragh?.data?.monthly_return)[yearIndex]
    ].map((graph) => ({
      name: graph.lable,

      value: graph.value,
    }));

  return newGargh;
}
