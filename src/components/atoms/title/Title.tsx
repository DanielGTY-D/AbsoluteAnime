import React from 'react';
import style from "./title.module.css";
export interface TittleProps {
  title: string;
  type: string;
}

const Title = ({ title, type }: TittleProps) => {
  return React.createElement(type, { className: style.title }, title);
};

export default Title;