const pexelsApiRequest = async (url) => {
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `${process.env.REACT_APP_PEXEL_KEY}`,
		},
	});
	if (!response.ok) {
		throw new Error(`Ding! Unexpected message from server: ${response.status}`);
	}
	const data = await response.json();
	return data;
};

export default pexelsApiRequest;
