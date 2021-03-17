import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let b1;
	let b2;
	let b3;

	const [color, setColor] = useState("rojo");

	if (color == "rojo") {
		b1 = "btn btn-danger";
		b2 = "btn btn-secondary";
		b3 = "btn btn-secondary ";
	} else if (color == "amarillo") {
		b1 = "btn btn-secondary";
		b2 = "btn btn-warning";
		b3 = "btn btn-secondary";
	} else if (color == "verde") {
		b1 = "btn btn-secondary";
		b2 = "btn btn-secondary";
		b3 = "btn btn-success";
	} else {
		b1 = "btn btn-danger";
		b2 = "btn btn-secondary";
		b3 = "btn btn-secondary ";
	}

	return (
		<div className="text-center mt-5 d-flex justify-content-center">
			<div id="contenedor" className="bg-dark rounded-pill">
				<div className="row d-flex justify-content-center" id="separar">
					<button
						type="button"
						id="luz"
						className={b1}
						onClick={() => setColor("rojo")}></button>
				</div>
				<div className="row d-flex justify-content-center" id="separar">
					<button
						type="button"
						id="luz"
						className={b2}
						onClick={() => setColor("amarillo")}></button>
				</div>
				<div className="row d-flex justify-content-center" id="separar">
					<button
						type="button"
						id="luz"
						className={b3}
						onClick={() => setColor("verde")}></button>
				</div>
			</div>
		</div>
	);
}
