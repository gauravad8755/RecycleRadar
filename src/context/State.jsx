import Context from "./Context";
import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { loginUserWithId, updateCreditPoints } from "../services/AuthService";

const State = (props) => {
	const [isLoading, setisLoading] = useState(false);
	const [ispopup, setispopup] = useState(false);
	const [islogin, setislogin] = useState(false);
	const [Location, setLocation] = useState("");
	const [Locationstate, setLocationstate] = useState("");
	const [User, setUser] = useState(null);
	const [facdata, setfacdata] = useState([]);
	const [fetcheddata, setfetcheddata] = useState([]);

	const increaseUserCreditPoints = async (creditPoints) => {
		const newCreditPoints = User.creditPoints + creditPoints;
		const updatedUser = await updateCreditPoints(User._id, newCreditPoints);
		setUser(updatedUser);
	};

	const reduceUserCreditPoints = async (creditPoints) => {
		const newCreditPoints = User.creditPoints - creditPoints;
		const updatedUser = await updateCreditPoints(User._id, newCreditPoints);
		setUser(updatedUser);
	};

	// To fetch the user details
	const fetchuser = async () => {
		try {
			const userData = await loginUserWithId(localStorage.getItem("user"));
			setUser(userData);
			setislogin(true);
		} catch (e) {
			setislogin(false);
		}
	};

	// ALgorith for Location fetching
	const ReverseGeocodeaddress = async (lat, log) => {
		mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

		// Construct the API URL with separate lat and lon parameters
		const geocodingApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${log},${lat}.json?access_token=${mapboxgl.accessToken}`;

		try {
			const response = await fetch(geocodingApiUrl);
			if (response.ok) {
				const data = await response.json();
				if (data.features && data.features.length > 0) {
					const city = data.features[0].context.find((context) =>
						context.id.startsWith("place.")
					);
					const state = data.features[0].context.find((context) =>
						context.id.startsWith("region.")
					);

					if (city) {
						setLocation(city.text);
					} else {
						console.error("City not found in context.");
					}

					if (state) {
						setLocationstate(state.text);
					} else {
						console.error("State not found in context.");
					}
				} else {
					console.error("No results found.");
				}
			} else {
				console.error("Error:", response.status, response.statusText);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	// To fetch the Ewaste Facility data
	const fetchcitystate = async () => {
		setisLoading(true);
		const res = await fetch(
			"https://api.allorigins.win/raw?url=https://ewfl-backend-hemant2335.vercel.app/ewaste"
		);
		const data = await res.json();
		setfacdata(data);
		setisLoading(false);
	};

	const fetchaddress = async () => {
		setisLoading(true);
		const sendstate = await Locationstate?.replace(/\s/g, "").toLowerCase();
		const res = await fetch(
			`https://api.allorigins.win/raw?url=https://ewfl-backend-hemant2335.vercel.app/ewaste/${
				sendstate ? sendstate : "haryana"
			}`
		);
		const data = await res.json();
		setfetcheddata(data?.data?.[0]?.data);
		setisLoading(false);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			ReverseGeocodeaddress(latitude, longitude);
		});
	}, []);

	useEffect(() => {
		fetchuser();
	}, []);

	useEffect(() => {
		fetchcitystate();

		fetchaddress();
	}, [Locationstate]);

	return (
		<Context.Provider
			value={{
				increaseUserCreditPoints,
				reduceUserCreditPoints,
				facdata,
				fetcheddata,
				Locationstate,
				Location,
				setLocation,
				User,
				setUser,
				ispopup,
				setispopup,
				islogin,
				setislogin,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default State;
