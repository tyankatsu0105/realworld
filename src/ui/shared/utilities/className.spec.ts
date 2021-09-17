import * as ClassName from './className';

describe('className', () => {
  describe('hasActiveClass', () => {
    it('when className has activeClass, then return true', () => {
      const params: Parameters<typeof ClassName.hasActiveClass>[0] = {
        activeClass: 'isActive',
        className: 'foo bar isActive',
      };

      const result = ClassName.hasActiveClass(params);

      expect(result).toBe<typeof result>(true);
    });

    it('when className has not activeClass, then return false', () => {
      const params: Parameters<typeof ClassName.hasActiveClass>[0] = {
        activeClass: 'isActive',
        className: 'foo bar',
      };

      const result = ClassName.hasActiveClass(params);

      expect(result).toBe<typeof result>(false);
    });
  });
});
