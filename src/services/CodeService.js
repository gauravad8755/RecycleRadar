import axios from "axios";

const addCode = async (codeType, vendor, code, description, user) => {
	try {
		const response = await axios.post(
			`${import.meta.env.VITE_SERVER_HOST}/api/code/add`,
			{ codeType, vendor, code, description, user },
			{
				headers: { Accept: "*/*" },
			}
		);

		const codeData = response.data.code;
		return codeData;
	} catch (error) {
		console.error("There was a problem with the create operation:", error);
		throw error;
	}
};

const fetchAllCodes = async (userId) => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_HOST}/api/code/fetchall/${userId}`,
			{
				headers: { Accept: "*/*" },
			}
		);

		const codes = response.data.codes;
		return codes;
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
		throw error;
	}
};

const fetchOneCode = async (codeId) => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_SERVER_HOST}/api/code/fetchone/${codeId}`,
			{
				headers: { Accept: "*/*" },
			}
		);

		const code = response.data.code;
		return code;
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
		throw error;
	}
};

const deleteCode = async (codeId) => {
	try {
		const response = await axios.delete(
			`${import.meta.env.VITE_SERVER_HOST}/api/code/delete/${codeId}`,
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

const CodeService = {
	addCode,
	fetchAllCodes,
	fetchOneCode,
	deleteCode,
};

export default CodeService;
export { addCode, fetchAllCodes, fetchOneCode, deleteCode };
