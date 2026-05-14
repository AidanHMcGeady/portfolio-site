import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Page from "./Screens/Page.tsx";
import HomeScreen from "./Screens/Home/Home.tsx";
import AboutScreen from "./Screens/About/About.tsx";
import ContactScreen from "./Screens/Contact/Contact.tsx";
import WorkScreen from "./Screens/Work/Work.tsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<HomeScreen />} />
					<Route path="About" element={<AboutScreen />} />
					<Route path="Contact" element={<ContactScreen />} />
					<Route path="Work" element={<WorkScreen />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
