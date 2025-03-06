import type * as React from "react";

export const Chart = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <svg className="w-full h-full">{children}</svg>;
};

export const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const ChartTooltipContent = () => {
  return <div>Tooltip Content</div>;
};

export const ChartLegend = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const ChartLegendItem = ({
  name,
  color,
}: {
  name: string;
  color: string;
}) => {
  return (
    <div className="flex items-center">
      <span
        className="mr-2 h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
      <span>{name}</span>
    </div>
  );
};

export const ChartGrid = ({ x, y }: { x?: any; y?: any }) => {
  return (
    <>
      <g className="x-grid" style={x}>
        <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" />
      </g>
      <g className="y-grid" style={y}>
        <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" />
      </g>
    </>
  );
};

export const ChartXAxis = ({
  tickCount,
  tickFormat,
}: {
  tickCount?: number;
  tickFormat?: (value: any) => string;
}) => {
  return null;
};

export const ChartYAxis = () => {
  return null;
};

export const ChartArea = ({
  data,
  name,
  fill,
  stroke,
  strokeWidth,
}: {
  data: any[];
  name: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
}) => {
  return null;
};

export const ChartLine = ({
  data,
  name,
  stroke,
  strokeWidth,
}: {
  data: any[];
  name: string;
  stroke: string;
  strokeWidth: number;
}) => {
  return null;
};

export const ChartBar = ({
  data,
  name,
  fill,
}: {
  data: any[];
  name: string;
  fill: string;
}) => {
  return null;
};
