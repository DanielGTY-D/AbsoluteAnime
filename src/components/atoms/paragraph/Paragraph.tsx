import "./paragraph.css";

type ParagraphProps = {
  text: string;
  ClassName: string;
  id?: string;
};

const Paragraph = ({ text, ClassName, id }: ParagraphProps) => {
  return (
    <>
      <p className={`${ClassName} paragraph`} id={id}>{text}</p>
    </>
  );
};

export default Paragraph;