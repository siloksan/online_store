import './App.css';
import Header from "./components/Header/Header";
import Catalog from "./components/Main/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StoreDescription from "./components/StoreDescription/StoreDescription";
import AboutPayment from "./components/Payment/Payment";
import Contacts from "./components/Contacts/Contacts";
import Orders from "./components/Orders/Orders";
import Basket from "./components/Basket/Basket";
import Favourites from "./components/Favourites/Favourites";

function App() {
	return (<BrowserRouter>
			<div className="app">
				<Header/>
				<main>
					<Routes>
						<Route path='/catalog' element={<Catalog/>}></Route>
						<Route path='/description' element={<StoreDescription/>}></Route>
						<Route path='/payment' element={<AboutPayment/>}></Route>
						<Route path='/contacts' element={<Contacts/>}></Route>
						<Route path='/favourites' element={<Favourites/>}></Route>
						<Route path='/orders' element={<Orders/>}></Route>
						<Route path='/basket' element={<Basket/>}></Route>
					</Routes>
				</main>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
