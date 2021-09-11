import { styled } from '@linaria/react';
import * as React from 'react';

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

const Presentational: React.FC<Props> = (props) => {
  const { className, variant, ...restProps } = props;
  return (
    <Avatar className={className} variant={variant}>
      <Img {...restProps} />
    </Avatar>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
type AvatarProps = {
  variant: Props['variant'];
};
const Avatar = styled.div<AvatarProps>`
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

  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #fff;
  overflow: hidden;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
