import Color from 'color';

export const transparentize = (params: {
  alpha: number;
  color: string;
}): string => {
  const color = Color(params.color).alpha(params.alpha);
  return (color as unknown) as string;
};
