import Color from 'color';

const transparentize = (params: { alpha: number; color: string }): string => {
  const color = Color(params.color).alpha(params.alpha).toString();

  return color;
};

export const color = {
  transparentize,
};
