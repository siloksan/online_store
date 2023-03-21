import './App.css';
import Header from "./components/Header/Header";
import Catalog from "./components/Main/Catalog/Catalog";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="app">
			<Header/>
			<main>
				<Catalog/>
			</main>
			<Footer/>
		</div>
	);
}

export default App;
