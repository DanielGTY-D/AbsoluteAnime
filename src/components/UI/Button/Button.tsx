import './_Button.scss';

interface ButtoProps {
  text: string,
  type: string
}

const Button = ({text, type}: ButtoProps) => {
  return (
    <div className={`button button--${type}`}>
      {text}
    </div>
  );
};

export default Button;