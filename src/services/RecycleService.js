import axios from "axios";

const addRecycle = async (product, creditPoints, location, user) => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_SERVER_HOST}/api/recycle/add`,
			{ product, creditPoints, location, user },
			{
				headers: { Accept: "*/*" },
			}
		);

		const recycle = response.data.recycle;
		return recycle;
	} catch (error) {
		console.error("There was a problem with the create operation:", error);
		throw error;
	}
};

const fetchAllRecycles = async (userId) => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_HOST}/api/recycle/fetchall/${userId}`,
			{
				headers: { Accept: "*/*" },
			}
		);

		const recycles = response.data.recycles;
		return recycles;
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
		throw error;
	}
};

const fetchOneRecycle = async (recycleId) => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_HOST}/api/recycle/fetchone/${recycleId}`,
			{
				headers: { Accept: "*/*" },
			}
		);

		const recycle = response.data.recycle;
		return recycle;
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
		throw error;
	}
};

const deleteRecycle = async (recycleId) => {
	try {
		const response = await axios.delete(
			`${import.meta.env.VITE_SERVER_HOST}/api/recycle/delete/${recycleId}`,
			{
				headers: { Accept: "*/*" },
			}
		);

		const data = response.data;
		return data;
	} catch (error) {
		console.error("There was a problem with the create operation:", error);
		throw error;
	}
};

const RecycleService = {
	addRecycle,
	fetchAllRecycles,
	fetchOneRecycle,
	deleteRecycle,
};

export default RecycleService;
export { addRecycle, fetchAllRecycles, fetchOneRecycle, deleteRecycle };
