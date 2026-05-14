import { JSX, PropsWithChildren, ReactNode } from "react";

interface FlexLayoutProps {
	align?: "start" | "centre" | "end";
	justify?:
		| "flex-start"
		| "center"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";

	width?: "100%" | "fit-content";
	height?: "100%" | "fit-content";
	flexDirection?: "row" | "column" | "column-reverse";
	position?: "relative" | "absolute";
	gap?: number;
}

const FlexLayout = (props: PropsWithChildren<FlexLayoutProps>) => {
	const {
		children = <span>No Content</span>,
		position = "relative",

		align = "center",
		justify = "space-between",

		height = "fit-content",
		width = "100%",

		flexDirection = "row",
		gap = 0.5,
	} = props;

	return (
		<div
			style={{
				display: "flex",

				alignItems: align,
				justifyContent: justify,

				position,
				top: 0,
				left: 0,

				maxWidth: width,
				width,
				height,

				flexDirection: flexDirection,
				flexWrap: "nowrap",

				gap: `${gap}rem`,
			}}>
			{children}
		</div>
	);
};

export default FlexLayout;
