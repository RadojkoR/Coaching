import { Link } from "react-router-dom"


interface ButtonProps {
    to: string;
    text: string;
    colorBg: string;
    textColor: string;
}

function Button({to, text, colorBg, textColor}: ButtonProps) {
  return (
    <Link
      to={to}
      className={`text-xl bg-${colorBg}-700 text-${textColor}-200 py-3 px-10`}
    >
      {text.toUpperCase()}
    </Link>
  );
}

export default Button