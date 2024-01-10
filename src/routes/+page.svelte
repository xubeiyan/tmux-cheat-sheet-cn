<script>
	import Remove from '../assets/icon/remove.svelte';
	import Search from '../assets/icon/search.svelte';

	let searchText = '';

	// 清空查找内容
	const clearSearchText = () => {
		searchText = '';
	};

	import { commandType } from '$lib';
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
	<div class="mt-2 w-full md:w-[40em]">
		{#each commandType as type}
			<h2 class="bg-sky-100 w-full rounded-sm px-2 py-1 text-center">{type.title}</h2>
			<div class="flex flex-col gap-1 my-2 md:w-1/2">
				{#each type.content as content}
					{#if content.type == 'tmuxCommand'}
						<span class="bg-slate-700 text-white rounded-md px-3 py-1 font-mono"
							>{content.text}</span
						>
					{:else if content.type == 'tmuxInnerCommand'}
						<span class="bg-teal-800 text-white rounded-md px-3 py-1 font-mono">{content.text}</span
						>
					{:else if content.type == 'tmuxKey'}
						<div>
							{#each content.key as key}
								{#if key == '+' || key == ' '}
									<span class="px-1">{key}</span>
								{:else}
									<kbd class="bg-gray-700 rounded-md px-2 py-1 text-white shadow-md shadow-gray-500"
										>{key}</kbd
									>
								{/if}
							{/each}
						</div>
					{:else if content.type == 'comment'}
						<span class="mb-4">{content.text}</span>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</div>
