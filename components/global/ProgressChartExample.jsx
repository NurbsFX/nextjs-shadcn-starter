"use client";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const chartData = [
    { month: "January", score: 70 },
    { month: "February", score: 75 },
    { month: "March", score: 80 },
    { month: "April", score: 85 },
    { month: "May", score: 88 },
    { month: "June", score: 90 },
];

const chartConfig = {
    score: {
        label: "Listening Progress",
        color: "hsl(var(--chart-1))",
    },
};

export function ListeningProgressChart() {
    return (
        <Card>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        data={chartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        width={400}
                        height={200}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" tickLine={false} axisLine={false} />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" hideLabel />}
                        />
                        <Area
                            type="monotone"
                            dataKey="score"
                            stroke="var(--color-desktop)"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}