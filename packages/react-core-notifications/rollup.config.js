import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import externals from 'rollup-plugin-node-externals';

// common config settings
const input = ['src/index.ts'];
const sourceMap = false;
const tsconfig = 'tsconfig.dist.json';

const config = defineConfig([
  // CJS config
  {
    input,
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [
      commonjs(),
      externals({ include: /^@aws-amplify/ }),
      typescript({ declarationDir: 'dist/types', sourceMap, tsconfig }),
      terser(),
    ],
  },
  // ESM config
  {
    input,
    output: {
      dir: 'dist/esm',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [
      commonjs(),
      externals({ include: /^@aws-amplify/ }),
      typescript({
        outDir: 'dist/esm',
        declaration: false,
        sourceMap,
        tsconfig,
      }),
      terser(),
    ],
  },
]);

export default config;
