import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });
export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  source: {
    //define: publicVars,
    define: {
      'process.env': JSON.stringify(process.env),
    },
  },
});
