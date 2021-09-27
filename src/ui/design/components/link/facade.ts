export const color = {
  accent: 'accent',
  primary: 'primary',
} as const;

export type Color = typeof color[keyof typeof color];
