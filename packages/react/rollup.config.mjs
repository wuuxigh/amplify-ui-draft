import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import externals from 'rollup-plugin-node-externals';

// common config settings
const input = ['src/index.ts', 'src/internal.ts', 'src/server.ts'];
const sourceMap = false;
const tsconfig = 'tsconfig.dist.json';

const esmOutputDir = 'dist/esm';

/**
 * @type {import('rollup').OutputOptions}
 */
const cjsOutput = {
  dir: 'dist',
  esModule: true,
  format: 'cjs',
  interop: 'auto',
};

const idk = {
  makeAbsoluteExternalsRelative: true,
  preserveEntrySignatures: 'strict',
  output: {
    dir: 'dist',
    esModule: true,
    format: 'cjs',
    generatedCode: {
      reservedNamesAsProps: false,
    },
    interop: 'compat',
    systemNullSetters: false,
  },
};

const config = defineConfig([
  // CJS config
  {
    input,
    ...idk,
    // output: cjsOutput,
    plugins: [
      externals({ include: /^@aws-amplify/ }),
      typescript({ declarationDir: 'dist/types', sourceMap, tsconfig }),
    ],
  },
  // ESM config
  {
    input,
    output: {
      dir: esmOutputDir,
      format: 'es',
      entryFileNames: '[name].mjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [
      externals({ include: /^@aws-amplify/ }),
      typescript({
        outDir: esmOutputDir,
        declaration: false,
        sourceMap,
        tsconfig,
      }),
    ],
  },
]);

export default config;
