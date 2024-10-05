import Home from "./components/Home";
import Visualizations from "./components/Visualizations";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Links from "./components/Links";

function App() {
	return (
		<Router>
			<div className="relative z-0 bg-primary">
				<div id="home">
					<Navbar />
					<Home />
				</div>
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Visualizations />
				</div>
				<Blog />
				<Links />
			</div>
		</Router>
	);
}

export default App;
