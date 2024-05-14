import axios from "axios";

const loginUser = async (email, password) => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_SERVER_HOST}/api/auth/login`,
			{ email, password },
			{
				headers: { Accept: "*/*" },
			}
		);

		const user = response.data.userData;
		return user;
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
		throw error;
	}
};

const loginUserWithId = async (userId) => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_HOST}/api/auth/loginwithid/${userId}`,
			{
				headers: { Accept: "*/*" },
			}
		);

		const user = response.data.userData;
		return user;
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
		throw error;
	}
};

const createUser = async (name, email, phone, password) => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_SERVER_HOST}/api/auth/createuser`,
			{ name, email, phone, password },
			{
				headers: { Accept: "*/*" },
			}
		);

		const user = response.data.userData;
		return user;
	} catch (error) {
		console.error("There was a problem with the create operation:", error);
		throw error;
	}
};

const updateCreditPoints = async (usedId, creditPoints) => {
	try {
		const response = await axios.put(
			`${
				import.meta.env.VITE_SERVER_HOST
			}/api/auth/updatecreditpoints/${usedId}`,
			{ creditPoints },
			{
				headers: { Accept: "*/*" },
			}
		);

		const user = response.data.user;
		return user;
	} catch (error) {
		console.error("There was a problem with the update operation:", error);
		throw error;
	}
};

const AuthService = {
	loginUser,
	loginUserWithId,
	createUser,
	updateCreditPoints,
};

export default AuthService;
export { loginUser, loginUserWithId, createUser, updateCreditPoints };
