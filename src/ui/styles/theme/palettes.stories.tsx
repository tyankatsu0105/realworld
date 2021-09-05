import { styled } from '@linaria/react';
import { Meta } from '@storybook/react';
import * as React from 'react';

import { palettes } from './palettes';

export default {
  title: 'Styles/Theme/Palettes',
} as Meta;

export const Palettes = (): React.ReactElement => (
  <ul>
    {Object.entries(palettes).map(([paletteKey, paletteValues]) => (
      <li key={paletteKey} className="mb-10">
        <p className="text-2xl">{paletteKey}</p>
        <ul className="flex">
          {Object.entries(paletteValues).map(([colorKey, colorValue]) => (
            <li key={colorKey}>
              <PalleteColorItem color={colorValue}></PalleteColorItem>
              {colorKey}
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

const PalleteColorItem = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
`;
