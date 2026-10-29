// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import mdx from '@astrojs/mdx';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), mdx({
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    })
  })],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: false
    }
  }
});