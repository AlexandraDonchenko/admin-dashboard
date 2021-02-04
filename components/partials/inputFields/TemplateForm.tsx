import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../styles/TemplateForm.module.scss';
import { showDialog } from '../../../redux/actions/dialogstatus-actions';
import { activateBlur, deactivateBlur } from '../../../redux/actions/dialogblur-actions';

interface Props { }

const TemplateForm: React.FunctionComponent<Props> = ({
  children, onSubmitAction, buttonText, cancel,
}) => {
  const dispatch = useDispatch('');

  const cancelDialog = (event) => {
    event.preventDefault();
    dispatch(showDialog('RESET'));
    dispatch(deactivateBlur());
  };

  return (
    <form className={styles.form} onSubmit={onSubmitAction}>
      <table>
        <tbody>
          {children}
          <tr>

            <td colSpan="2">
              <input className={styles.submit} type="submit" value={buttonText} />
              <button onClick={() => cancelDialog(event)}>Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default TemplateForm;
