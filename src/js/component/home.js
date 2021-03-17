import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5 d-flex justify-content-center">
			<div id="contenedor" className="bg-warning rounded-pill">
				<div className="row d-flex justify-content-center" id="separar">
					<button
						type="button"
						id="luz"
						className="btn btn-danger"></button>
				</div>
				<div className="row d-flex justify-content-center" id="separar">
					<button
						type="button"
						id="luz"
						className="btn btn-danger"></button>
				</div>
				<div className="row d-flex justify-content-center" id="separar">
					<button
						type="button"
						id="luz"
						className="btn btn-danger"></button>
				</div>
			</div>
		</div>
	);
}
