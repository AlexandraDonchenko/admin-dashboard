import React from 'react';
import cx from 'classnames';
import styles from '../../../styles/TemplateInput.module.scss';

interface Props { }

const TemplateInput: React.FunctionComponent<Props> = ({
  type,
  labelText,
  dropdownOptions,
  radioOptions,
}) => {
  const renderType = (type) => {
    switch (type) {
      case 'text':
        return <input className={cx(styles.input, styles.text)} type="text" />;

      case 'password':
        return <input className={cx(styles.input, styles.password)} type="password" />;

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
          <select className={cx(styles.input, styles.select)}>
            {dropdownOptions.map((option) => <option className={styles.selectOption} key={option}>{option}</option>)}
          </select>
        );
      default:
        return <input type="text" />;
    }
  };

  return (
    <tr>
      <td className={styles.labelCell}>
        <label id={styles.label} htmlFor={labelText}>{labelText}</label>
      </td>
      <td>
        {renderType(type)}
      </td>
    </tr>

  );
};

export default TemplateInput;
