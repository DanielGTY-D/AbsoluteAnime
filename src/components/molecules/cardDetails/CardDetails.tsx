import Title from "../../atoms/title/Title";
import Paragraph from "../../atoms/paragraph/Paragraph";
import "./card-ditails.css";
interface CardDitailsProps {
	titleType: string;
	ClassNameContent: string;
	ClassNameDitails: string;
	ClassNameDesc: string;
	ClassNameAiring: string;
	ClassNameEp: string;
	ClassNameGeneres: string;
	title: string;
	ep: string;
	generes: string;
	airing: string;
	desc: string;
}
const CardDitails = ({
	ClassNameContent,
	ClassNameDitails,
	ClassNameDesc,
	ClassNameAiring,
	ClassNameEp,
	ClassNameGeneres,
	airing,
	ep,
	generes,
	title,
	titleType,
	desc
}: CardDitailsProps) => {
	return (
		<div className={ClassNameContent}>
			<Title type={titleType} title={title} />
			<Paragraph ClassName={ClassNameDesc} text={desc}/>
			<div className={ClassNameDitails}>
				<Paragraph ClassName={ClassNameEp} text={ep}/>
				<Paragraph ClassName={ClassNameGeneres} text={generes}/>
				<Paragraph ClassName={ClassNameAiring} text={airing}/>
			</div>
		</div>
	);
};

export default CardDitails;
