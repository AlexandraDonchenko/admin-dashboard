import React from 'react';
import styles from '../../../styles/TemplateForm.module.scss';

interface Props { }

const TemplateInput: React.FunctionComponent<Props> = ({ children, onSubmitAction, buttonText }) => (
  <form className={styles.form} onSubmit={onSubmitAction}>
    <table>
      <tbody>
        {children}
        <tr>
          <td colSpan="2">
            <input className={styles.submit} type="submit" value={buttonText} />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
);

export default TemplateInput;
