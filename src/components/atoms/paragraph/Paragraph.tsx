import "./paragraph.css";

type ParagraphProps = {
  text: string;
  ClassName: string;
};

const Paragraph = ({ text, ClassName }: ParagraphProps) => {
  return (
    <>
      <p className={`${ClassName} paragraph`}>{text}</p>
    </>
  );
};

export default Paragraph;