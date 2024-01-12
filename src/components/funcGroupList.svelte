<script>
	import CommandInput from './commandInput.svelte';
	export let funcGroup = [];
</script>

<ul class="md:columns-2 lg:columns-3 gap-x-8">
	{#each funcGroup as func}
		<li class="flex flex-col gap-1 break-inside-avoid">
			{#each func.command as command}
				{#if command.type == 'tmuxCommand' || command.type == 'tmuxInnerCommand'}
					<CommandInput type={command.type} value={command.text} />
				{:else if command.type == 'tmuxKey'}
					<div class="flex gap-1">
						{#each command.key as key}
							{#if key == '+' || key == ' ' || key == '...'}
								<span class="px-1 dark:text-white">{key}</span>
							{:else}
								<kbd
									class="px-2 bg-stone-800 dark:bg-stone-700 text-white rounded-md shadow-sm shadow-slate-900"
									>{key}</kbd
								>
							{/if}
						{/each}
					</div>
				{/if}
			{/each}
			<span class="mb-4 dark:text-slate-50">{func.comment}</span>
		</li>
	{/each}
</ul>
