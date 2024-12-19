import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Customchart() {
  // Data untuk chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales ($)',
        data: [3000, 4000, 5000, 6000, 7000, 8000],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opsi konfigurasi untuk chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Data Overview',
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: 'auto', padding: '20px' }}>
      <h2>Custom Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Customchart;
