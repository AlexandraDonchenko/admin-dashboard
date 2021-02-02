import React from 'react';

interface Props {
}

const DefaultLayout: React.FunctionComponent<Props> = ({ children }) => (
  <div>{children}</div>
);

export default DefaultLayout;
