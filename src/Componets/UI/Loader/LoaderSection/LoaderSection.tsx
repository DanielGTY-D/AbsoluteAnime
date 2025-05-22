import "./_LoaderSection.scss";

const LoaderSection = () => (
  <div className="section__skeleton">
    {[...Array(3)].map((_, idx) => (
      <div className="section__skeleton-card" key={idx}>
        <div className="section__skeleton-image" />
        <div className="section__skeleton-content">
          <div className="section__skeleton-title" />
          <div className="section__skeleton-text" />
        </div>
      </div>
    ))}
  </div>
);

export default LoaderSection;