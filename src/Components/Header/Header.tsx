import React from "react";
import FlexLayout from "../FlexLayout/FlexLayout.tsx";
import Text from "../Text/Text.tsx";
import { useNavigate } from "react-router-dom";

type HeaderType = {
	activeScreen: "Home" | "About" | "Contact";
};

const screens = ["Home", "About", "Contact", "Work"];

function Header(props: HeaderType) {
	const { activeScreen } = props;
	const navigation = useNavigate();
	// const hasScrolled = scroll(). > 0;

	return (
		<>
			<div
				style={{
					width: "100%",
					padding: "2rem 0rem",
					backgroundColor: "lightgray",
					maxWidth: "100%",
					height: "3rem",
					alignItems: "center",
					display: "flex",
				}}></div>

			<div
				style={{
					width: "100%",
					padding: "2rem 0rem",
					maxWidth: "100%",
					height: "3rem",
					alignItems: "center",
					display: "flex",
					position: "fixed",
				}}>
				<FlexLayout gap={2} justify="space-around">
					<Text type="heading">A.H.McGeady</Text>

					<FlexLayout width="fit-content" justify="flex-start" gap={2}>
						{screens.map((screen, i) => (
							<Text
								type={"title"}
								onClick={() => {
									navigation({
										pathname: screen === "Home" ? "/" : `/${screen}`,
									});
								}}>
								{screen}
							</Text>
						))}
					</FlexLayout>
				</FlexLayout>
			</div>
		</>
	);
}

export default Header;
