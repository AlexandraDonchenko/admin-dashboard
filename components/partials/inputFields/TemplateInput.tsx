import React from 'react';
import styles from 'styles/TemplateInput.module.scss';

interface Props { }

const TemplateInput: React.FunctionComponent<Props> = ({ children, labelText }) => {
  <div id={style.wrapper}>
    <label htmlFor={labelText}>{labelText}</label>
    {children}
  </div>;
};

export default TemplateInput;
