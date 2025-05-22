import "./_Loader.scss";

const LoaderHeader = () => {
	return (
		<div className="header__skeleton">
			<div className="skeleton-image" />
			<div className="skeleton-content">
				<div className="skeleton-title" />
				<div className="skeleton-text" />
				<div className="skeleton-genres">
					<div className="skeleton-genre" />
					<div className="skeleton-genre" />
					<div className="skeleton-genre" />
				</div>
			</div>
		</div>
	);
};


export default LoaderHeader;