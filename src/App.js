import { useState } from "react";
import "./App.css";
import { Result } from "./components/Result";
import InputForm from "./components/InputForm";
import OutputGraph from "./components/OutputGraph";

function App() {
	const [result, setResult] = useState(null);

	return (
		<div className="App">
			<div className="main">
				<div className="main-content">
					<div className="container">
						<InputForm setResult={setResult} />
					</div>
					{result && (
						<div className="container">
							<Result result={result} />
						</div>
					)}
				</div>
				{result && (
					<div className="graph-container">
						<OutputGraph result={result} />
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
