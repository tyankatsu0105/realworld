import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as Avatar } from './assets/avatar.svg';
import { variant } from './facade';
// ------------------------------------
// Props
// ------------------------------------

type Variant = typeof variant[keyof typeof variant];

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  variant: Variant;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const { className, style, variant, ...restProps } = props;

  return (
    <Wrap className={className} style={style} variant={variant}>
      {props.src ? <Img {...restProps} /> : <Avatar />}
    </Wrap>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
type WrapProps = {
  variant: Props['variant'];
};
const Wrap = styled.div<WrapProps>`
  border-radius: ${(props) => {
    switch (props.variant) {
      case 'rounded':
        return '5px';
      case 'circle':
        return '50%';
      case 'square':
        return 0;
    }
  }};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.palettes.brand.primary[100]};
  color: ${(props) => props.theme.palettes.brand.primary[700]};
  overflow: hidden;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
