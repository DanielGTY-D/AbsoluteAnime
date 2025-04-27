import React from "react";
import "./title.css";
export interface TittleProps {
  title: string;
  type: string;
  ClassName: string;
}

const Title = ({ title, type, ClassName }: TittleProps) => {
  return React.createElement(type, { className: ClassName }, title);
};

export default Title;
