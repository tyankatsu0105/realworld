import * as React from 'react';

type asProp<Component extends React.ElementType> = {
  /**
   * For styled-components as props
   * @see: https://styled-components.com/docs/api#as-polymorphic-prop
   */
  as?: Component;
};

type OverridableComponentProps<
  Component extends React.ElementType,
  Props = unknown
> = asProp<Component> &
  Omit<React.ComponentPropsWithRef<Component>, keyof asProp<Component>> &
  Props;

export type OverridableComponent<
  Component extends React.ElementType,
  Props = unknown
> = <DefaultElement extends React.ElementType = Component>(
  props: OverridableComponentProps<DefaultElement, Props>
) => JSX.Element | null;
