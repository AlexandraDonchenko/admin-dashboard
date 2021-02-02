import React from 'react';
import TemplateInput from './TemplateInput';

interface Props { }

const TextInput: React.FunctionComponent<Props> = () => (
  <TemplateInput labelText="Hello World" type="text" />
);

export default TextInput;
