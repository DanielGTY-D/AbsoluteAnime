import Image, { ImageProps } from "../../atoms/image/Image";
import CardDitails from "../../molecules/cardDetails/CardDetails";
interface CardProps {
	image: ImageProps;
	cardDitails: {
		titleType: string;
		ClassNameContent: string;
		ClassNameDitails: string;
		ClassNameDesc: string;
		ClassNameAiring: string;
		ClassNameEp: string;
		ClassNameGeneres: string;
		title: string;
		ep: number;
		generes: object[];
		airing: boolean;
		desc: string;
	};
}
const Card = ({ cardDitails, image }: CardProps) => {
	const {
		ClassNameAiring,
		ClassNameContent,
		ClassNameDesc,
		ClassNameDitails,
		ClassNameEp,
		ClassNameGeneres,
		airing,
		desc,
		ep,
		generes,
		title,
		titleType,
	} = cardDitails;
	return (
		<>
			<Image ClassName={image.ClassName} Src={image.Src} Alt={image.Alt} />
			<CardDitails
				ClassNameDesc={ClassNameDesc}
				ClassNameAiring={ClassNameAiring}
				ClassNameEp={ClassNameEp}
				ClassNameGeneres={ClassNameGeneres}
				ClassNameContent={ClassNameContent}
				ClassNameDitails={ClassNameDitails}
				titleType={titleType}
				title={title}
				desc={desc}
				ep={ep ? `${ep} Episodes` : "Unknown"}
				generes={generes}
				airing={airing ? "Airing" : "Finished"}
			/>
		</>
	);
};

export default Card;
