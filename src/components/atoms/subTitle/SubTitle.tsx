import { TittleProps } from "../title/Title";
import syle from "./sub-title.module.css";
const SubTitle = ({title} : TittleProps) => {
  return (
    <>
      <h4 className={style.subtitle}>{title}</h4>
    </>
  )
}

export default SubTitle;