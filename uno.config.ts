import { defineConfig, presetAttributify, presetMini } from 'unocss';

export default defineConfig({
  // ...UnoCSS options
  presets: [presetAttributify(), presetMini()]
});
