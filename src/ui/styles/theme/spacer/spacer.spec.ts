import { spacer } from './spacer';

describe('spacer', () => {
  it('when pass number, then return value multiplied by 4', () => {
    const amount: Parameters<typeof spacer>[0] = 10;

    const result = spacer(amount);

    expect(result).toBe(40);
  });
});
