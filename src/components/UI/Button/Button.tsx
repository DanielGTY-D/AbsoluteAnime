import './_Button.scss';

interface ButtoProps {
  text: string,
  type: string,
  action?: () => void,
}

const Button = ({text, type, action}: ButtoProps) => {
  return (
    <div className={`button button--${type}`} onClick={action}>
      {text}
    </div>
  );
};

export default Button;