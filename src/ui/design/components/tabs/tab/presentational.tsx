import * as React from 'react';

// ------------------------------------
// Props
// ------------------------------------

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> & {
  childrenIndex: number;
  onClick?: (
    params: {
      index: number;
    },
    event: React.MouseEvent<HTMLDivElement>
  ) => void;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational: React.FC<Props> = (props) => {
  const { children, childrenIndex, ...restProps } = props;
  const onClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) =>
      props.onClick && props.onClick({ index: childrenIndex }, event),
    [childrenIndex, props]
  );

  return (
    <div {...restProps} className={props.className} onClick={onClick}>
      {children}
    </div>
  );
};

export const Component = React.memo(Presentational);
