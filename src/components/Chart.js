import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const largestValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={largestValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
