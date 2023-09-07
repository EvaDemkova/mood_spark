import "./App.css";

import Router from "./router";
import {BrowserRouter} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
		<div className="App font-sans">
			<Router />
		</div>
		</BrowserRouter>
	);
}

export default App;
