import { styled } from '@stitches/react';
import * as React from 'react';

const Component = () => <Button>Button</Button>;

export default Component;

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
});
