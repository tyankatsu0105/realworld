import { css } from '@linaria/core';

export const globals = css`
  @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap');

  :global() {
    html {
      font-family: 'Teko', sans-serif;
    }

    a {
      cursor: pointer;
    }
  }
`;
