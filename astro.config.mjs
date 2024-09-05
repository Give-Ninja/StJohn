import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon({
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                // or disable plugins
                removeDoctype: false,
                margeStyles: false,
                cleanupAttrs: false,
                convertPathData: false,
                convertShapeToPath: false,
                convertStyleToAttrs: false,
                convertTransform: false,
                inlineStyles: false,
                minifyStyles: false,
                removeAttrs: false,
                removeDimensions: false,
                removeStyleElement: false
              }
            }
          }
        ]
      }
    })]
});