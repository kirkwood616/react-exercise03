import React, { useState } from "react";
import "./UpDownCounter.css";

function UpDownCounter() {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);

	return (
		<div id="UpDownCounter">
			<div id="counterContainer">
				<button id="up" onClick={() => setCount1((count) => count + 1)}>
					Up
				</button>
				<p>{count1}</p>
				<button id="down" onClick={() => setCount1((count) => count - 1)}>
					Down
				</button>
			</div>
			<div id="counterContainer">
				<button id="up" onClick={() => setCount2((count) => count + 1)}>
					Up
				</button>
				<p>{count2}</p>
				<button id="down" onClick={() => setCount2((count) => count - 1)}>
					Down
				</button>
			</div>
			<div id="counterContainer">
				<button id="up" onClick={() => setCount3((count) => count + 1)}>
					Up
				</button>
				<p>{count3}</p>
				<button id="down" onClick={() => setCount3((count) => count - 1)}>
					Down
				</button>
			</div>
		</div>
	);
}

export default UpDownCounter;
