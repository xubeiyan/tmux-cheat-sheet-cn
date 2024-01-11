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
	$: filteredSesssions = sessions.filter((one) => one.keywords.includes(searchText));

	import { windowData } from '$lib/windowData';
	import Windows from '../components/windows.svelte';
	$: filteredWindows = windowData.filter((one) => one.keywords.includes(searchText));
</script>

<svelte:head>
	<title>Tmux 速查表 & 参考</title>
</svelte:head>

<div class="flex flex-col items-center w-full px-2 md:px-0 md:w-[30em] mx-auto">
	<h1 class="text-2xl py-4 dark:text-white">Tmux 速查表 & 参考</h1>
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
	<div class="mt-2 w-full md:w-[45em] lg:w-[75em]">
		<Sessions sessions={filteredSesssions} />
		<Windows windowData={filteredWindows} />
	</div>
</div>
