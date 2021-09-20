export const variant = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
} as const;

export type Variant = typeof variant[keyof typeof variant];

export const color = {
  accent: 'accent',
  primary: 'primary',
} as const;

export type Color = typeof color[keyof typeof color];
