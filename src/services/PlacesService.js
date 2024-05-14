import axios from "axios";

const getStateFromLatLng = async (lat, lng) => {
	try {
		const response = await axios.get(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json`,
			{
				params: {
					access_token: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
				},
				headers: { Accept: "*/*" },
			}
		);

		const state = response.data.features.at(-2).text;
		return state;
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
		throw error;
	}
};

const getEWasteCenters = async (state) => {
	try {
		const response = await axios.get(
			`https://api.allorigins.win/get?url=https://thingproxy.freeboard.io/fetch/https://ewfl-backend-hemant2335.vercel.app/ewaste/${state
				.toLowerCase()
				.replaceAll(" ", "")}`,
			{ headers: { Accept: "*/*", "X-Requested-With": "XMLHttpRequest" } }
		);

		return JSON.parse(response.data.contents).data[1].data;
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
		throw error;
	}
};

const getLatLngFromAddress = async (address) => {
	try {
		const response = await axios.get(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${
				address.split(" ").length > 20 ? address.replaceAll(" ", "") : address
			}.json`,
			{
				params: {
					access_token: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
				},
				headers: { Accept: "*/*" },
			}
		);

		const [lng, lat] = response.data.features[0].geometry.coordinates;
		const coordinates = { lat, lng };
		return coordinates;
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
		throw error;
	}
};

const PlacesService = {
	getStateFromLatLng,
	getEWasteCenters,
	getLatLngFromAddress,
};

export default PlacesService;
export { getStateFromLatLng, getEWasteCenters, getLatLngFromAddress };
