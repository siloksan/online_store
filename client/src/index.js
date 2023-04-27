import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import TypeStore from "./store/TypeStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Context.Provider value={{
		user: new UserStore(),
		product: new ProductStore(),
		type: new TypeStore()
		}
	}>
		<App/>
	</Context.Provider>
);

reportWebVitals();
