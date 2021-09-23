import { Meta } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

import { palettes } from './palettes';

export default {
  title: 'Styles/Theme/Palettes',
} as Meta;

export const Palettes = (): React.ReactElement => (
  <ul>
    <PaletteList palettes={palettes} />
  </ul>
);

type PaletteListProps = {
  palettes: typeof palettes;
};
const PaletteList = (props: PaletteListProps) => {
  return (
    <>
      {Object.entries(props.palettes).map(
        ([paletteCategoryKey, paletteCategoryValues]) => (
          <li key={paletteCategoryKey} className="mb-10">
            <p className="text-3xl">{paletteCategoryKey}</p>
            <ul>
              {Object.entries(paletteCategoryValues).map(
                ([paletteKey, paletteValue]) => (
                  <li key={paletteKey} className="mb-10">
                    <p className="text-2xl">{paletteKey}</p>
                    <ul className="flex">
                      {Object.entries(paletteValue).map(
                        ([colorKey, colorValue]) => (
                          <li key={colorKey}>
                            <PalleteColorItem color={colorValue as string} />
                            {colorKey}
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </li>
        )
      )}
    </>
  );
};
// const PaletteList = (props: PaletteListProps) => {
//   return (
//     <>
//       {Object.entries(props.palettes).map(([paletteKey, paletteValues]) => (
//         <li key={paletteKey} className="mb-10">
//           <p className="text-2xl">{paletteKey}</p>
//           <ul className="flex">
//             {Object.entries(paletteValues).map(([colorKey, colorValue]) => {
//               if (typeof colorValue === 'object')
//                 return <PaletteList palettes={colorValue} />;

//               return (
//                 <li key={colorKey}>
//                   <PalleteColorItem color={colorValue} />
//                   {colorKey}
//                 </li>
//               );
//             })}
//           </ul>
//         </li>
//       ))}
//     </>
//   );
// };

const PalleteColorItem = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
`;
