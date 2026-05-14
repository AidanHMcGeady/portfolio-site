import React, { PropsWithChildren } from "react";
import FlexLayout from "../FlexLayout/FlexLayout.tsx";

function Screen(props: PropsWithChildren) {
	const { children } = props;

	return (
		<>
			<div
				style={{
					maxWidth: "100vw",
					minWidth: "100vw",
					width: "100vw",

					minHeight: "100vh",
					height: "fit-content",

					overflowX: "hidden",
				}}>
				<FlexLayout
					height="100%"
					flexDirection="column"
					justify="space-between">
					{children}
				</FlexLayout>
			</div>
		</>
	);
}

export default Screen;
