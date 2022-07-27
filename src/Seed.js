const baseUrl = "https://api.pexels.com/v1/curated";
const apiKey = "";

const getPhotos = () => {
	fetch(baseUrl, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Basic ${apiKey}`,
		},
		mode: "cors",
	})
		.then((response) => response.json())
		.then((data) => extractPhotos(data))
		.catch((err) => console.log(`These went wrong: `, err));
};

const extractPhotos = (data) => {
	// return setPhotos(data.photos);
};

export const album = [
	{
		id: 1,
		title: "Photo 1",
		url: "https://static.dezeen.com/uploads/2021/04/ultimate-collectors-cars_dezeen_2364_sq_0-300x300.jpg",
	},
	{
		id: 2,
		title: "Photo 2",
		url: "https://forgeline.com/wp-content/uploads/2018/12/2-Kenseth-7E2A4607-300x300.jpg",
	},
	{
		id: 3,
		title: "Photo 3",
		url: "https://i.ytimg.com/an/ZaJKztA0bF0/46719088-c9e0-4b01-9726-594cd1f439bc_mq.jpg",
	},
	{
		id: 4,
		title: "Photo 4",
		url: "https://chicagocarclub.com/wp-content/uploads/2016/07/rep2-300x300.jpg",
	},
	{
		id: 5,
		title: "Photo 5",
		url: "https://resizing.flixster.com/mUNN6qe9Ihh5j6ASSKW6y0LAMJQ=/300x300/v2/https://flxt.tmsimg.com/assets/p10702874_b_v9_ak.jpg",
	},
];
