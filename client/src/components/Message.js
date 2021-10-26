import React from "react";

const Message = ({ children, variant }) => {
	return (
		<div className={`alert alert-${variant || "info"}`}>
			<h1>{children}</h1>
		</div>
	);
};

export default Message;
