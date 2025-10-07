import { defineConfig, presetAttributify, presetWind3, presetIcons } from 'unocss';
// import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  rules: [['custom-rule', { color: 'red' }]],
  shortcuts: {
    'custom-shortcut': 'text-lg text-orange hover:text-teal'
  },
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    // presetRemToPx({
    //   baseFontSize: 3 // 1rem = 3px
    // })
  ],
});