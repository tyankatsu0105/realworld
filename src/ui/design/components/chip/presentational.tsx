import * as React from 'react';
import styled from 'styled-components';

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
  padding: ${(props) => props.theme.spacer(1)}px
    ${(props) => props.theme.spacer(2)}px;
  border-radius: 16px;

  background-color: ${(props) => props.theme.palettes.brand.primary[300]};
  color: ${(props) => props.theme.palettes.material.common.white};

  cursor: ${(props) => props.isClickable && 'pointer'};
`;

const Avatar = styled.div`
  margin-right: ${(props) => props.theme.spacer(1)}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ClearButton = styled.div`
  margin-left: ${(props) => props.theme.spacer(1)}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
