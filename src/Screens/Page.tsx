import { JSX } from "react";
import Screen from "../Components/Screen/Screen.tsx";
import Header from "../Components/Header/Header.tsx";
import Text from "../Components/Text/Text.tsx";
import Footer from "../Components/Footer/Footer.tsx";

type PageType = {
	children: JSX.Element;
};

const EmptyPage = () => {
	return (
		<div
			style={{
				width: "100%",
				maxWidth: "100%",
				padding: "2rem 0rem",

				minHeight: "60vh",
			}}>
			<Text>This page is under development. Check again later!</Text>
		</div>
	);
};

function Page(props: PageType) {
	const { children = EmptyPage() } = props;

	return (
		<Screen>
			<Header activeScreen="Home" />

			{children}

			<Footer />
		</Screen>
	);
}

export default Page;
