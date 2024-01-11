<script>
	export let sessions = [];
</script>

<h1 class="text-xl bg-blue-100 rounded-sm py-2 text-center">Sessions(会话相关)</h1>
<div class="grid grid-flow-row md:grid-cols-2 gap-x-6 my-2">
	{#each sessions as func}
		<div class="flex flex-col gap-1">
			{#each func.command as command}
				{#if command.type == 'tmuxCommand'}
					<span class="bg-slate-800 text-white px-3 py-1 rounded-md font-mono">{command.text}</span>
				{:else if command.type == 'tmuxInnerCommand'}
					<span class="bg-teal-800 text-white px-3 py-1 rounded-md font-mono">{command.text}</span>
				{:else if command.type == 'tmuxKey'}
					<div class="flex gap-1">
						{#each command.key as key}
							{#if key == '+' || key == ' '}
								<span class="px-1">{key}</span>
							{:else}
								<kbd class="px-2 bg-stone-800 text-white rounded-md shadow-sm shadow-slate-900"
									>{key}</kbd
								>
							{/if}
						{/each}
					</div>
				{/if}
			{/each}
			<span class="mb-4">{func.comment}</span>
		</div>
	{/each}
</div>
