import React from 'react';
import cx from 'classnames';
import styles from '../../../styles/TemplateInput.module.scss';
import { Doors } from '../../../redux/types';

interface Props {
  type?: string,
  labelText?: string,
  question?: string,
  dropdownOptions?: string[],
  radioOptions?: string[],
  onChangeAction: any,
  value: any,
  checkBoxOptions?: Doors,
  placeholder?: string
}

const TemplateInput: React.FunctionComponent<Props> = ({
  type,
  labelText,
  question,
  dropdownOptions,
  radioOptions,
  onChangeAction,
  checkBoxOptions,
  placeholder,
  value,
}) => {
  const handleSubmit = (event) => {
    onChangeAction(event);
  };
  const handleText = (event) => {
    const text = event.target.value;
    if (text === '' && placeholder) {
      onChangeAction(placeholder);
    } else {
      onChangeAction(text);
    }
  };

  const renderType = () => {
    switch (type) {
      case 'question':
        return <p className={styles.question}>{question}</p>;
      case 'text':
        return <input className={cx(styles.input, styles.text)} type="text" onChange={handleText} value={value} placeholder={placeholder} />;
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
              <input className={styles.radio} key={option} name={labelText} type="radio" onChange={onChangeAction} value={option} />
              <label className={styles.radioLabel} key={`${option}-label`} htmlFor={labelText}>{option}</label>
              <br />
            </span>
          ))
        );
      case 'dropdown':
        return (
          <select className={cx(styles.input, styles.select)} onChange={onChangeAction}>
            {dropdownOptions.map((option) => <option className={styles.selectOption} key={option.id} value={option.id}>{option.value}</option>)}
          </select>
        );
      case 'checkbox':
        return (
          checkBoxOptions.doors.map((option) => (
            <span key={option.did}>
              <input className={styles.checkbox} key={option.did} name={option.doorName} type="checkbox" onChange={handleSubmit} value={option.did} />
              <label className={styles.radioLabel} key={`${option.doorName}-label`} htmlFor={labelText}>{option.doorName}</label>
              <br />
            </span>
          ))
        );
      default:
        return <input type="text" onChange={onChangeAction} placeholder={placeholder} />;
    }
  };

  return (
    <tr>
      { labelText && (

      <td className={styles.labelCell}>
        <label id={styles.label} htmlFor={labelText}>{labelText}</label>
      </td>
      )}
      <td>
        {renderType(type)}
      </td>
    </tr>

  );
};

export default TemplateInput;
