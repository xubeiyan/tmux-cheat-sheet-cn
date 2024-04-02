import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			// 根据部署的站点的子目录修改
			// 例如生产环境就部署到 chenhai.net/tools/tmux-cheat-sheet-cn 这个域名下
			base: process.env.NODE_ENV == 'production' ? '/tools/tmux-cheat-sheet-cn' : '',
		}
	},
	preprocess: vitePreprocess()
};

export default config;
