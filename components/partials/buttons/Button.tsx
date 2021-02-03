import React from 'react';
import styles from '../../../styles/TemplateForm.module.scss';

interface Props { }

const Button: React.FunctionComponent<Props> = ({ buttonText }) => (
  <form className={styles.form} onSubmit={onSubmitAction}>
    <table>
      <tbody>
        {children}
      </tbody>
    </table>
  </form>
);

export default Button;
