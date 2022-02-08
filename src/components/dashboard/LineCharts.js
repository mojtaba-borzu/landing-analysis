/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from "react";

import {
  Line,
  Area,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  LineChart,
  ComposedChart,
  CartesianGrid,
  linearGradient,
  ResponsiveContainer,
} from "recharts";

let color = "#ef00ff";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 4000,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 9000,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page F",
    uv: 4000,
    pv: 3800,
  },
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={8} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={10}
          y={10}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default function chart() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id={color} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={"#344767"} stopOpacity={0.2} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />

          <YAxis />
          <Tooltip content={<CustomTooltip data={data} />} />
          {/* <Line
            XAxis="center"
            type="monotone"
            dataKey="value"
            strokeWidth={3}
            stroke={
              portfoliTtrackerRequestResult?.data?.trend == 'down'
                ? '#DF0000'
                : '#028D0F'
            }
          /> */}
          <Area
            type="monotone"
            dataKey="uv"
            strokeWidth={3}
            fillOpacity={1}
            stroke={"#344767"}
            strokeLinecap="round"
            fill={`url(#${color})`}
          />
          <Area
            type="monotone"
            dataKey="pv"
            strokeWidth={3}
            fillOpacity={1}
            stroke={"#46BCFD"}
            strokeLinecap="round"
            fill={`url(#${color})`}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );

  function generatChart(gragh) {
    let newGargh = gragh.data?.cumulative_return?.map((graph) => ({
      name: graph.lable,
      uv: graph.time,
      value: graph.value,
    }));

    return newGargh;
  }
}
const CustomTooltip = ({ active, payload, label, data }) => {
  if (active && payload && payload.length) {
    return (
      <>
        <div className=" flex flex-col px-[10px] py-[5px] bg-white shadow-2xl	">
          <p dir="rtl" className="name">{` ${payload[0].payload.name} `}</p>
          <p
            dir="rtl"
            className="label"
          >{` ${payload[0].value.toLocaleString()} تومان`}</p>
        </div>
      </>
    );
  }
  return null;
};
