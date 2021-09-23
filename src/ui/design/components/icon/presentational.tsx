import * as React from 'react';
import styled from 'styled-components';

import { useIcons } from './facade';
// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLElement> & {
  icons: ReturnType<typeof useIcons>;
  size?: string;
  variant: keyof ReturnType<typeof useIcons>;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const { icons, size, variant, ...restProps } = props;
  const Component = React.useMemo(() => icons[variant], [variant, icons]);

  return (
    <Wrap size={size} {...restProps}>
      <Component style={{ width: '100%' }} />
    </Wrap>
  );
};

export const Component = React.memo(Presentational);

type WrapProps = {
  size?: Props['size'];
};
const Wrap = styled.div<WrapProps>`
  width: ${(props) => props.size ?? 'auto'};
  height: ${(props) => props.size ?? 'auto'};
`;
