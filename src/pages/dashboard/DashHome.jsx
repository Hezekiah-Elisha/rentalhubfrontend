import { useState } from "react";
import { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashHome() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up an interval to increment the count
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 12) {
          return prevCount + 1;
        } else {
          clearInterval(interval); // Clear interval when target is reached
          return prevCount;
        }
      });
    }, 50); // Adjust the interval time to control the speed of the animation

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-poppins p-5 w-full">
      <h1 className='text-3xl text-left'>Dashboard Home</h1>
      <p className='text-left'>Welcome to your dashboard</p>
      <div className="flex justify-evenly w-full">
        <div className="bg-gray-300 rounded-lg p-10 w-1/2">
          <h2 className="text-2xl text-center">
            Your Number of properties
          </h2>
          <p className="text-5xl text-green-500 text-center">
            {count}
          </p>
        </div>
        <div className="bg-gray-300 rounded-lg p-10 w-1/2">
          <h2 className="text-2xl text-center">
            Your Number of properties
          </h2>
          <p className="text-5xl text-green-500 text-center">
            {count}
          </p>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="w-1/2">
          <Doughnut data={
            {
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [
                {
                  label: 'x of Votes',
                  data: [12, 19, 3],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                  ],
                  borderWidth: 1,
                },
              ],
            }
          } />
        </div>
        <div className="w-1/2">
          <Doughnut data={
            {
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [
                {
                  label: 'x of Votes',
                  data: [12, 19, 3],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                  ],
                  borderWidth: 1,
                },
              ],
            }
          } />
        </div>
      </div>
    </div>
  );
}