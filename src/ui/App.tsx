import { styled } from '@linaria/react';
import * as React from 'react';

const Component = () => <Button>Button</Button>;

export default Component;

const Button = styled.button`
  background-color: 'gainsboro';
  border-radius: 10px;
  font-size: 13px;
  padding: 12px;
`;
