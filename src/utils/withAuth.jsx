import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../context/Context";

const withAuth = (Component) => {
	return (props) => {
		const { islogin } = useContext(Context);

		if (!islogin) {
			return <Navigate to="/login" />;
		}

		return <Component {...props} />;
	};
};

export default withAuth;
