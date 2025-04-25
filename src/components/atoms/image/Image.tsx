import "./image.css";

export interface ImageProps {
	Src: string;
	ClassName: string;
	Alt: string;
}

const Image = ({ ClassName, Src, Alt }: ImageProps) => {
	return (
		<>
			<a href="#" className="image-container">
				<img src={Src} alt={Alt} className={ClassName} />
			</a>
		</>
	);
};

export default Image;
