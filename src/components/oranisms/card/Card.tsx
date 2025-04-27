import Image, { ImageProps } from "../../atoms/image/Image";
import "./card.css";
import CardData from "../../molecules/cardDetails/CardData";
interface CardProps {
  ClassName: string;
  image: ImageProps;
  cardDitails: {
    titleType: string;
    ClassNameContent: string;
    ClassNametitle: string;
    ClassNameDitails: string;
    ClassNameDesc?: string;
    ClassNameAiring?: string;
    ClassNameEp?: string;
    ClassNameGeneres?: string;
    title: string;
    ep?: number;
    generes?: object[];
    airing?: boolean;
    desc?: string;
  };
}
const Card = ({ ClassName, cardDitails, image }: CardProps) => {
  const {
    ClassNameAiring,
    ClassNameContent,
    ClassNameDesc,
    ClassNameDitails,
    ClassNameEp,
    ClassNametitle,
    ClassNameGeneres,
    airing,
    desc,
    ep,
    generes,
    title,
    titleType,
  } = cardDitails;
  return (
    <div className={ClassName}>
      <Image ClassName={image.ClassName} Src={image.Src} Alt={image.Alt} />
      <CardData
        ClassNametitle={ClassNametitle}
        ClassNameDesc={ClassNameDesc ? ClassNameDesc : ""}
        ClassNameAiring={ClassNameAiring ? ClassNameDitails : ""}
        ClassNameEp={ClassNameEp ? ClassNameEp : ""}
        ClassNameGeneres={ClassNameGeneres ? ClassNameGeneres : ""}
        ClassNameContent={ClassNameContent}
        ClassNameDitails={ClassNameDitails}
        titleType={titleType}
        title={title}
        desc={desc ? desc : ""}
        ep={ep ? `${ep} Episodes` : ""}
        generes={generes ? generes : []}
        airing={airing && airing ? "Airing" : "Finished"}
      />
    </div>
  );
};
export default Card;
