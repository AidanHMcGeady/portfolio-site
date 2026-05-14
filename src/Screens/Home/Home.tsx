import FlexLayout from "../../Components/FlexLayout/FlexLayout.tsx";
import Text from "../../Components/Text/Text.tsx";
import Page from "../Page.tsx";

const techStack = {
	engines: ["UE4", "Unity", "Phaser 3", "Three.JS"],
	frameworks: ["React"],
	languages: ["JavaScript", "TypeScript", "C++", "C#", "HTML5", "Python"],
	tools: ["Git Hub", "JEST", "Playwright"],
	online: ["AWS", "SST", "Photon PUN"],
};

function HomeScreen() {
	const techStackKeys = Object.keys(techStack);

	return (
		<Page>
			<FlexLayout flexDirection="column" height="fit-content">
				<FlexLayout flexDirection="column" justify="center">
					<Text type="subTitle">Tech Stack</Text>

					{techStackKeys.map((a, i) => (
						<div id={`stack-${i}`}>
							<Text>{a}</Text>

							<FlexLayout flexDirection="row">
								{/**@ts-expect-error */}
								{techStack[a].map((b, j) => (
									<img id={`item-${j}`} alt={b} src="" />
								))}
							</FlexLayout>
						</div>
					))}
				</FlexLayout>

				<FlexLayout></FlexLayout>

				<FlexLayout></FlexLayout>

				<FlexLayout></FlexLayout>
			</FlexLayout>
		</Page>
	);
}

export default HomeScreen;
