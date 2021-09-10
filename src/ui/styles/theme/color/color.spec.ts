import { color } from './color';

describe('color', () => {
  describe('transparentize', () => {
    it('when pass alpha, then convert rgba with alpha value', () => {
      const params: Parameters<typeof color.transparentize>[0] = {
        alpha: 0.5,
        color: '#000000',
      };

      const result = color.transparentize(params);

      expect(result).toBe('rgba(0, 0, 0, 0.5)');
    });
  });
});
