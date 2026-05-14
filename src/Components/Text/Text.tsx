import React from "react";
import styles from "./Text.module.css";

type TextProps = {
	children: string;

	type?: "paragraph" | "subTitle" | "title" | "heading";
	onClick?: () => void;
};

function Text(props: TextProps) {
	const { children, type = "paragraph", onClick } = props;

	return (
		<span className={`${styles[type]}`} onClick={onClick}>
			{onClick ? <u>{children}</u> : children}
		</span>
	);
}

export default Text;
