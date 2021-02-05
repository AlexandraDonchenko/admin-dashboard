import React from 'react';
import cx from 'classnames';
import styles from '../../../styles/TemplateInput.module.scss';

interface Props {
  type: string,
  labelText: string,
  dropdownOptions?: [],
  radioOptions?: [],
  onChangeAction: Function,
}

const TemplateInput: React.FunctionComponent<Props> = ({
  type,
  labelText,
  dropdownOptions,
  radioOptions,
  onChangeAction,
  onSubmitAction,
  value,
}) => {
  const renderType = (type) => {
    switch (type) {
      case 'text':
        return <input className={cx(styles.input, styles.text)} type="text" onChange={onChangeAction} value={value} />;
      case 'password':
        return <input className={cx(styles.input, styles.password)} type="password" onChange={onChangeAction} value={value} />;
      case 'file':
        return (
          <span className={styles.fileWrapper}>
            <label htmlFor={labelText} className={styles.fileButton}>Choose Image</label>
            <input id={labelText} className={cx(styles.file)} type="file" onChange={onChangeAction} value={value} />
          </span>
        );
      case 'radio':
        return (
          radioOptions.map((option) => (
            <span key={option}>
              <input className={styles.radio} key={option} name={labelText} type="radio" onChange={onChangeAction} value={value} />
              <label className={styles.radioLabel} key={`${option}-label`} htmlFor={labelText}>{option}</label>
              <br />
            </span>
          ))
        );
      case 'dropdown':
        return (
          <select className={cx(styles.input, styles.select)} onChange={onChangeAction}>
            {dropdownOptions.map((option) => <option className={styles.selectOption} key={option.gid} value={option.gid}>{option.groupName}</option>)}
          </select>
        );
      default:
        return <input type="text" onChange={onChangeAction} />;
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
