import {
  Container,
  Chart,
  Tiles,
  Tile,
  Key,
  Value,
} from "@/Components/Styled/ChartSection";
import { useTheme } from "styled-components";
import type { UITheme } from "@/types";
import Icon from "@/Components/Functional/Icon";
import icon from "public/images/icons/clock.svg";

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
export default function ChartSection() {
  const theme = useTheme() as UITheme;
  const data = [
    { speed: 0, height: 0.23, acceleration: 0.5 },
    { speed: -0.12, height: -0.2, acceleration: 0.6 },
    { speed: 0.25, height: 0.22, acceleration: 0.4 },
    { speed: 0.33, height: -0.29, acceleration: 0.9 },
    { speed: 0.5, height: 0.3, acceleration: 0.2 },
    { speed: -0.24, height: -0.2, acceleration: 0.6 },
    { speed: 0.1, height: 0.33, acceleration: 1 },
    { speed: 0, height: 0.23, acceleration: 0.5 },
    { speed: 0.33, height: -0.19, acceleration: 0.9 },
    { speed: 0.5, height: 0.3, acceleration: 0.2 },
    { speed: 0.23, height: -0.2, acceleration: 0.6 },
    { speed: 0.1, height: -0.45, acceleration: 1 },
  ];

  return (
    <Container>
      <Tiles>
        {new Array(7)
          .fill({ icon: icon.src, key: "Distance(ft)", value: "1200ft" })
          .map((item, index) => {
            return (
              <Tile key={index}>
                <Icon src={item.icon} height="22px" width="22px" />
                <Value>{item.value}</Value>
                <Key>{item.key}</Key>
              </Tile>
            );
          })}
      </Tiles>
      <Chart>
        <ResponsiveContainer>
          <LineChart
            width={100}
            height={300}
            margin={{ top: 20, right: 0, bottom: -40, left: 0 }}
            data={data}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" tickSize={0} axisLine={false} tickCount={3} />
            <YAxis
              tickSize={0}
              dx={-10}
              axisLine={false}
              tickCount={4}
              style={{
                fontSize: "18px",
                fontFamily: "inherit",
                fontWeight: 500,
                fill: theme.colors.blackFont,
              }}
            />
            <Tooltip />
            <Legend
              iconType="square"
              align={"right"}
              formatter={(value: string, entry: unknown) => {
                return (
                  <span
                    style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "14px" }}
                  >
                    {value}
                  </span>
                );
              }}
              wrapperStyle={{
                paddingRight: "10px",
                margin: "0px",
                marginInline: "0px",
                fontSize: "18px",
                fill: theme.colors.blackFont,
                marginBlockEnd: "60px",
              }}
            />
            <Line
              dataKey="height"
              stroke="#F4BC88"
              dot={false}
              strokeWidth={3}
              activeDot={{ r: 5 }}
            />
            <Line
              dataKey="acceleration"
              stroke="#62C4C7"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Line
              dataKey="speed"
              strokeWidth={3}
              dot={false}
              stroke="#72B1EA"
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Chart>
    </Container>
  );
}
