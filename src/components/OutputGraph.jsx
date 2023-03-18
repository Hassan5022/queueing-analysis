
import { Bar, Line } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart, LinearScale, LineElement, PointElement } from "chart.js";

function OutputGraph({ result }) {
	const waitingTimeInSystemData = [0, 0, 0, 3, 4, 3, 7, 7, 10, 11];

	Chart.register(CategoryScale);
	Chart.register(LinearScale);
	Chart.register(PointElement);
	Chart.register(BarElement);
	Chart.register(LineElement);

	const data = {
		labels: ["Simulation Results"],
		datasets: [
			{
				label: "Average Number of Customers in System",
				backgroundColor: "rgba(255,99,132,0.2)",
				borderColor: "rgba(255,99,132,1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255,99,132,0.4)",
				hoverBorderColor: "rgba(255,99,132,1)",
				data: [result.L],
			},
			{
				label: "Average Waiting Time in System",
				backgroundColor: "rgba(54,162,235,0.2)",
				borderColor: "rgba(54,162,235,1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(54,162,235,0.4)",
				hoverBorderColor: "rgba(54,162,235,1)",
        data: [result.W],
			},
		],
	};

	// const options = {
	//   scales: {
	//     yAxes: [
	//       {
	//         ticks: {
	//           beginAtZero: true,
	//         },
	//       },
	//     ],
	//   },
  // };

	return (
		<div>
			<h3 style={{color:'#656057'}}>Simulation Results</h3>
			{/* <Bar data={data} options={options} /> */}
			<Bar data={data} />
			<Line
				data={{
					labels: waitingTimeInSystemData.map((_, index) => index + 1),
					datasets: [
						{
							label: "Average Waiting Time in System",
							data: waitingTimeInSystemData,
							fill: false,
							borderColor: "rgb(75, 192, 192)",
							tension: 0.1,
						},
					],
				}}
			/>
		</div>
	);
}

export default OutputGraph;
