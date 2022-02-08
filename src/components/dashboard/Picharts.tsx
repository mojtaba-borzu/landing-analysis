import React from "react";
import { Pie, Cell, PieLabel, PieChart, ResponsiveContainer } from "recharts";

const data: any = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF1042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel: PieLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  entry,
  index,
}) => {
  const radius = outerRadius * 1.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text
        x={x}
        y={y}
        fill="currentColor"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`  ${data[index].name}-${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};

export default function charts() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={data.name}
            label={renderCustomizedLabel}
            strokeWidth={3}
            // paddingAngle={2}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
