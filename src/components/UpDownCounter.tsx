import React, { useState } from "react";
import "./UpDownCounter.css";

function UpDownCounter() {
	const [count1, setCount1] = useState(0);

	return (
		<div id="UpDownCounter">
			<button id="up" onClick={() => setCount1((count) => count + 1)}>
				Up
			</button>
			<p>{count1}</p>
			<button id="down" onClick={() => setCount1((count) => count - 1)}>
				Down
			</button>
		</div>
	);
}

export default UpDownCounter;
