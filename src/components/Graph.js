import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BASE_URL = "https://backenddashboard-0pxs.onrender.com";

const Graph = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "User Login Count",
        data: [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        barPercentage: 0.5, // Controls the width of the bars
      },
    ],
  });

  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 1, // Ensures y-axis ticks increment by 1
        },
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/user/allUser`, {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        });
        const userData = response.data;

        const dateCounts = userData.reduce((acc, user) => {
          const date = new Date(user.lastLoginDate).toISOString().split("T")[0];
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(dateCounts),
          datasets: [
            {
              ...chartData.datasets[0],
              data: Object.values(dateCounts),
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h2>User Login Activity</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Graph;
