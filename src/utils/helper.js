export const extractUrl = (url) => {
	let validUrl = url.slice(8, url.length);
	if (validUrl !== "https://") {
		validUrl = url.slice(7, url.length);
	}
	return validUrl;
};

export const easeOutLoaders = (fxn = () => {}) => {
	if (!fxn) return;
	setTimeout(() => {
		return fxn();
	}, 3500);
};

export const delay = 500;
