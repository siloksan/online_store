import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";

const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Context.Provider value={{
		user: new UserStore()
	}}>
    <App />
		</Context.Provider>
);

reportWebVitals();
