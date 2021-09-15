/**
 * @type {import('@swc/core/types').Config}
 */
module.exports = {
  jsc: {
    parser: {
      syntax: 'typescript',
      tsx: true,
    },

    transform: {
      react: {
        runtime: 'automatic',
      },
    },
  },
  module: {
    type: 'commonjs',
  },
};
