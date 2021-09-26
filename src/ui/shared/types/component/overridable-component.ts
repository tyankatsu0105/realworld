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

type ElementAttr<
  Element extends React.ElementType
> = Element extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Element]
  : never;

export type OverridableComponent<
  Element extends React.ElementType,
  Props = unknown
> = <Component extends React.ElementType = Element>(
  props: OverridableComponentProps<Component, Props> & ElementAttr<Element>
) => JSX.Element | null;
