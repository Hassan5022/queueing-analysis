import './Result.css'

export const Result = ({ result }) => {
	if (result === null) return null;
	return (
		<div className="result-container">
			<div className="results">{`Average Number of Customers in the System: ${result.L.toFixed(
				2
			)}`}</div>
			<div className="results">{`Average Number of Customers in the Queue: ${result.Lq.toFixed(
				2
			)}`}</div>
			<div className="results">{`Average Waiting Time in the System: ${result.W.toFixed(
				2
			)}`}</div>
			<div className="results">{`Average Waiting Time in the Queue: ${result.Wq.toFixed(
				2
			)}`}</div>
			<div className="results">{`Probability of n Customers: ${result.Pn.toFixed(
				4
			)}`}</div>
			<div className="results">{`Average Number of Customers when it's not Empty: ${result.Ls.toFixed(
				2
			)}`}</div>
			<div className="results">{`Idle Time of the Server: ${result.idleTime.toFixed(
				2
			)}`}</div>
		</div>
	);
};
