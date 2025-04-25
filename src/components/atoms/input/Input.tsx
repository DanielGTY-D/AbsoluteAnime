import "./input.css";

interface InputProps {
  type: string;
  ClassName: string;
  PlaceHolder: string;
  id?: string;
  name: string;
}

const Input = ({ type, ClassName, PlaceHolder, id, name} : InputProps) => {
  return (
    <>
      <input type={type} name={name} id={id} className={ClassName} placeholder={PlaceHolder}/>
    </>
  )
}

export default Input;