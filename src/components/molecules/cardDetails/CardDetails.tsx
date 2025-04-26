import Title from "../../atoms/title/Title";
import Paragraph from "../../atoms/paragraph/Paragraph";
import "./card-ditails.css";
export interface CardDitailsProps {
	titleType: string;
	ClassNameContent: string;
	ClassNameDitails: string;
	ClassNameDesc: string;
	ClassNameAiring: string;
	ClassNameEp: string;
	ClassNameGeneres: string;
	title: string;
	ep: string;
	generes: {
		gener: string;
		id: number;
	}[];
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
				{
					generes.map( el => (
						<Paragraph ClassName={ClassNameGeneres} text={el.gener} id={el.id.toString()} key={el.id}/>
					))
				}
				<Paragraph ClassName={ClassNameAiring} text={airing}/>
			</div>
		</div>
	);
};

export default CardDitails;
