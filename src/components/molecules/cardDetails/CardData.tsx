import Title from "../../atoms/title/Title";
import Paragraph from "../../atoms/paragraph/Paragraph";
import "./card-data.css";
export interface CardDitailsProps {
  titleType: string;
  ClassNameContent: string;
  ClassNameDitails: string;
  ClassNameDesc: string;
  ClassNameAiring: string;
  ClassNameEp: string;
  ClassNameGeneres: string;
  title: string;
  ClassNametitle: string;
  ep: string;
  generes:
  | {
    gener: string;
    id: number;
  }[]
  | [];
  airing: string;
  desc: string;
}
const CardData = ({
  ClassNameContent,
  ClassNameDitails,
  ClassNameDesc,
  ClassNameAiring,
  ClassNameEp,
  ClassNameGeneres,
  ClassNametitle,
  airing,
  ep,
  generes,
  title,
  titleType,
  desc,
}: CardDitailsProps) => {
<<<<<<< HEAD
=======

>>>>>>> 8bfe2ef7bbe10203b8c48c49e0de98ceef881024
  return (
    <div className={ClassNameContent}>
      <Title type={titleType} title={title} ClassName={ClassNametitle} />
      {desc && <Paragraph ClassName={ClassNameDesc} text={desc} />}
      <div className={ClassNameDitails}>
        {ep && <Paragraph ClassName={ClassNameEp} text={ep} />}
        {generes &&
          generes.map((el) => (
            <Paragraph
              ClassName={ClassNameGeneres}
              text={el.gener}
              id={el.id.toString()}
              key={el.id}
            />
          ))}
        {airing && <Paragraph ClassName={ClassNameAiring} text={airing} />}
      </div>
    </div>
  );
};

export default CardData;
