export const extractUrl = (url) => {
	let validUrl = url.slice(8, url.length);
	if (validUrl !== "https://") {
		validUrl = url.slice(7, url.length);
	}
	return validUrl;
};

export const delay = 500;

export const fetchLocalStorage = (name) => {
	if (!name) return null;
	const data = localStorage.getItem(name);
	if (data) {
		return JSON.parse(data);
	}
	return null;
};

export const storeLocalStorage = (name, data) => {
	if (!name) return null;
	localStorage.setItem(name, JSON.stringify(data));
	return true;
};
