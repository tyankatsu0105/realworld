import { styled } from '@linaria/react';
import * as React from 'react';

import { Theme } from '~ui/styles';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLDivElement> & {
  renderBody?: () => React.ReactElement;
  renderFooter?: () => React.ReactElement;
  renderHeader?: () => React.ReactElement;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const { renderBody, renderFooter, renderHeader, ...restProps } = props;

  return (
    <Wrap {...restProps}>
      {renderHeader && renderHeader()}
      {renderBody && renderBody()}
      {renderFooter && renderFooter()}
    </Wrap>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Wrap = styled.div`
  border-radius: 6px;
  background-color: ${() => Theme.palettes.material.common.white};
`;
