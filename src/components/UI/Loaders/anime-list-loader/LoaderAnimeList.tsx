import "./_loaderAnimeList.scss";

const skeletonArray = Array.from({ length: 12 });

const LoaderAnimeList = () => (
	<ul className="anime-list contenedor">
		{skeletonArray.map((_, idx) => (
			<li key={idx}>
				<div className="card-tree card-tree--skeleton">
					<div className="card-tree__image card-tree__image--skeleton" />
					<div className="card-tree__content card-tree__content--skeleton">
						<div className="card-tree__title card-tree__title--skeleton" />
						<div className="card-tree__desc card-tree__desc--skeleton" />
					</div>
				</div>
			</li>
		))}
	</ul>
);

export default LoaderAnimeList;
