import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Features, Contact } from "./Components";
import { Homepage, SearchMap, Login, RecycleQueues, Profile } from "./Pages";
import State from "./context/State";
import NewRecycle from "./Pages/NewRecycle";
import Recycle from "./Pages/Recycle";
import Chatbot from "./Components/Chatbot";
import Store from "./Pages/Store";

const App = () => {
	return (
		<div>
			<State>
				<Router>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Homepage />} />
						<Route exact path="/features" element={<Features />} />
						<Route exact path="/contact" element={<Contact />} />
						<Route exact path="/search" element={<SearchMap />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/register" element={<Login />} />
						<Route
							exact
							path="/newrecycle/:centreAddress"
							element={<NewRecycle />}
						/>
						<Route exact path="/recyclequeues" element={<RecycleQueues />} />
						<Route exact path="/recycle/:recycleId" element={<Recycle />} />
						<Route exact path="/profile" element={<Profile />} />
						<Route exact path="/store" element={<Store />} />
					</Routes>
					<Footer />
					<Chatbot />
				</Router>
			</State>
		</div>
	);
};

export default App;
