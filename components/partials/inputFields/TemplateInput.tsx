import React from 'react';
import styles from '../../../styles/TemplateInput.module.scss';

interface Props { }

const TemplateInput: React.FunctionComponent<Props> = ({
  type, labelText, dropdownOptions, radioOptions,
}) => {
  const renderType = (type) => {
    switch (type) {
      case 'text':
        return <input className={styles.text} type="text" />;

      case 'password':
        return <input className={styles.text} type="password" />;

      case 'radio':
        return (

          radioOptions.map((option) => (
            <>
              <input className={styles.radio} name={labelText} type="radio" />
              <label className={styles.radioLabel} htmlFor="#">{option}</label>
            </>
          ))

        );
      case 'dropdown':
        return (
          <select className={styles.select}>
            {dropdownOptions.map((option) => <option className={styles.selectOption} key={option}>{option}</option>)}
          </select>
        );
      case 'submit':
        return <input className={styles.submit} type="submit" value="Login" />;
      default:
        return <input type="text" />;
    }
  };

  return (

    <tr>
      <td>
        <label id={styles.label} htmlFor={labelText}>{labelText}</label>
      </td>
      <td>
        {renderType(type)}
      </td>
    </tr>

  );
};

export default TemplateInput;
