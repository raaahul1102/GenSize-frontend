import React from "react";
import "./SizeChart.css"; // Ensure to import the CSS file for table styling

const SizeChart = ({ chartData, brand }) => {
  // Fallback to empty array if chartData is undefined or null
  const data = chartData || [];

  return (
    <div className="size-chart-container">
      <h2>
        {`Generated Size Chart for ${
          brand.charAt(0).toUpperCase() + brand.slice(1)
        }`}{" "}
      </h2>
      <table className="size-chart-table">
        <thead>
          <tr>
            <th>Size</th>
            <th>Chest (in)</th>
            <th>Waist (in)</th>
            <th>Hips (in)</th>
            <th>Height (in)</th>
            <th>Confidence Score</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.size}</td>
                <td>{row.chest}</td>
                <td>{row.waist}</td>
                <td>{row.hips}</td>
                <td>{row.height}</td>
                <td className="confidence-score">{row.confidence}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SizeChart;
