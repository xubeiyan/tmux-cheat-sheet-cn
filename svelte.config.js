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
			// 例如这个就是部署到chenhai.net/tools/tmux-cheat-sheet-cn 这个域名下
			base: '/tools/tmux-cheat-sheet-cn'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
