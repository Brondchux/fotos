import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import pexelsApiRequest, { BASE_URL } from "../../utils/api";
import constants from "../../utils/constants";
import { extractUrl } from "../../utils/helper";

const Picture = () => {
	const { photoId } = useParams();
	const url = `${BASE_URL}/photos/${photoId}`;
	const navigate = useNavigate();
	const [src, setSrc] = useState(null);
	const [pexelUrl, setPexelUrl] = useState(null);
	const [alt, setAlt] = useState(null);
	const [photographerName, setPhotographerName] = useState(null);
	const [photographerLink, setPhotographerLink] = useState(null);
	const [pictureId, setPictureId] = useState(null);
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);

	const goBack = () => navigate("/");

	const apiCall = useCallback(async () => {
		await pexelsApiRequest(url)
			.then((data) => {
				console.log(data);
				setPexelUrl(data.url);
				setSrc(data.src.portrait);
				setAlt(data.alt);
				setPhotographerName(data.photographer);
				setPhotographerLink(data.photographer_url);
				setPictureId(data.id);
				setHeight(data.height);
				setWidth(data.width);
			})
			.catch((e) => {
				console.log(e);
			});
	}, [photoId]);

	useEffect(() => {
		apiCall();
	}, [photoId]);

	return (
		<div className="row">
			<div className="col-sm-12 col-lg-4 mb-3">
				<div className="bio row">
					{photographerName && (
						<div className="col-12">
							<h3>Photographer</h3>
							<p>{photographerName}</p>
						</div>
					)}
					{(alt || pictureId || height || width) && (
						<div className="col-12 mt-3">
							<h3>Picture</h3>
							<p>{alt}</p>
							<p>#{pictureId}</p>
							<p>
								{height} x {width}
							</p>
						</div>
					)}
					{photographerLink && (
						<div className="col-12 mt-3">
							<h3>Pexel</h3>
							<p>
								<Link
									to={`//${extractUrl(photographerLink)}`}
									target="_blank"
									rel="noopener"
								>
									@{photographerLink.split("@")[1]}
								</Link>
							</p>
						</div>
					)}
					<div className="col-sm-12 mt-5 d-none d-lg-block">
						<button className="btn btn-secondary" onClick={goBack}>
							{constants.COPY.GOBACK}
						</button>
					</div>
				</div>
			</div>
			{src && (
				<div className="col-sm-12 col-lg-8 mb-3">
					<Link to={`//${extractUrl(pexelUrl)}`} target="_blank" rel="noopener">
						<img
							src={src}
							className="rounded img-fluid float-sm-start float-lg-end"
							alt={alt}
						></img>
					</Link>
				</div>
			)}
			<div className="col-12 mt-5 d-lg-none">
				<button className="btn btn-secondary" onClick={goBack}>
					{constants.COPY.GOBACK}
				</button>
			</div>
		</div>
	);
};

export default Picture;
