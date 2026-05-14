import { useState } from "react";

type ButtonProps = {
	width: number;
	text: string;
};

function Button(props: ButtonProps) {
	const { text, width } = props;

	const [isEnabled, setIsEnabled] = useState(true);

	return (
		<>
			<button></button>
		</>
	);
}

export default Button;
