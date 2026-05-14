import React from "react";
import FlexLayout from "../FlexLayout/FlexLayout.tsx";

function Footer() {
	return (
		<>
			<div
				style={{
					width: "100%",
					maxWidth: "100%",
					padding: "2rem 0rem",
					backgroundColor: "lightgray",
					minHeight: "15vh",
				}}>
				<FlexLayout></FlexLayout>
			</div>
		</>
	);
}

export default Footer;
