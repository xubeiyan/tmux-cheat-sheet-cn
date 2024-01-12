<script>
	import Remove from '../assets/icon/remove.svelte';
	import Search from '../assets/icon/search.svelte';

	let searchText = '';

	// 清空查找内容
	const clearSearchText = () => {
		searchText = '';
	};

	import { sessions } from '$lib/sessionsData';
	import Sessions from '../components/sessions.svelte';
	$: filteredSesssions = sessions.filter((one) =>
		one.keywords.toLowerCase().includes(searchText.toLowerCase())
	);

	import { windowData } from '$lib/windowData';
	import Windows from '../components/windows.svelte';
	$: filteredWindows = windowData.filter((one) =>
		one.keywords.toLowerCase().includes(searchText.toLowerCase())
	);

	import { panesData } from '$lib/panesData';
	import Panes from '../components/panes.svelte';
	import TitleArea from '../components/titleArea.svelte';
	$: filteredPanes = panesData.filter((one) =>
		one.keywords.toLowerCase().includes(searchText.toLowerCase())
	);
</script>

<svelte:head>
	<title>Tmux 速查表 & 参考</title>
</svelte:head>

<div class="flex flex-col items-center w-full px-2 md:px-0 md:w-[40em] xl:w-[70em] mx-auto">
	<TitleArea />
	<label class="w-full group border border-slate-500 rounded-full p-2 flex">
		<Search size={1.5} />
		<input
			class="bg-transparent ml-2 focus:outline-0 flex-grow dark:text-white"
			bind:value={searchText}
		/>
		{#if searchText.length > 0}
			<button on:click={clearSearchText}>
				<Remove size={1.2} />
			</button>
		{/if}
	</label>
	<div class="mt-2 w-full md:w-[45em] xl:w-[75em]">
		<Sessions sessions={filteredSesssions} />
		<Windows windowData={filteredWindows} />
		<Panes panes={filteredPanes} />
	</div>
</div>
