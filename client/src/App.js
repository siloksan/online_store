import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
	return (<BrowserRouter>
			<div className="app">
				<Header/>
					<AppRoutes/>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
