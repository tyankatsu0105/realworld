import { styled } from '@linaria/react';
import * as React from 'react';

import { Theme } from '~ui/styles';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLDivElement> & {
  isClickable: boolean;
  renderAvatar?: () => React.ReactElement;
  renderClearButton?: () => React.ReactElement;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational: React.FC<Props> = (props) => {
  const { children, renderAvatar, renderClearButton, ...restProps } = props;

  return (
    <Wrap
      {...restProps}
      isClickable={props.isClickable}
      tabIndex={props.isClickable ? 0 : -1}
    >
      {renderAvatar && <Avatar>{renderAvatar()}</Avatar>}
      <span>{children}</span>
      {renderClearButton && <ClearButton>{renderClearButton()}</ClearButton>}
    </Wrap>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

type WrapProps = {
  isClickable: Props['isClickable'];
};
const Wrap = styled.div<WrapProps>`
  display: inline-flex;
  align-items: center;
  padding: ${() => Theme.spacer(1)}px ${() => Theme.spacer(2)}px;
  border-radius: 16px;

  background-color: ${() => Theme.palettes.brand.primary[300]};
  color: ${() => Theme.palettes.material.common.white};

  cursor: ${(props) => (props.isClickable ? 'pointer' : 'auto')};
`;

const Avatar = styled.div`
  margin-right: ${() => Theme.spacer(1)}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ClearButton = styled.div`
  margin-left: ${() => Theme.spacer(1)}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
