import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-netlify';

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
