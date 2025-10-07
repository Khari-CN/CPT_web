import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import path from 'path';
import {
  NaiveUiResolver,
  // ElementPlusResolver,
} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Components from 'unplugin-vue-components/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader('src/assets/icons/'),
      },
    }),
    Components({
      resolvers: [
        NaiveUiResolver(),
        // ElementPlusResolver(),
        IconsResolver({
          prefix: 'icon',
          customCollections: ['custom'],
        }),
      ],
      dts: 'src/types/components.d.ts',
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '#': '/src/types',
    },
  },
  server:{
    host: '0.0.0.0'
  },
  build: {
    outDir: 'root',
  }
})