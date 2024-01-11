<script>
	import Checked from '../assets/icon/checked.svelte';
	import Copy from '../assets/icon/copy.svelte';
	export let value = '';
	export let type = 'tmuxCommand';
	// 不同命令类型不同颜色
	$: bgColor = type == 'tmuxCommand' ? 'bg-slate-800' : 'bg-teal-800';
	// 是否已复制
	let copied = false;
	$: opacity = copied ? 'opacity-100' : 'opacity-0';
	// 复制
	const copyCommand = async () => {
		try {
			await navigator.clipboard.writeText(value.substring(2));
			copied = true;
		} catch (err) {
			console.log('未能复制');
		}
	};
</script>

<label class="relative">
	<input
		class="peer w-full text-white px-3 py-1 rounded-md font-mono focus:bg-white focus:text-black {bgColor}"
		{value}
		readonly
	/>
	<button
		class="{opacity} peer-focus:opacity-100 absolute right-1 top-[50%] translate-y-[-50%] cursor-pointer"
		on:click={copyCommand}
	>
		{#if !copied}
			<Copy size={1.2} />
		{:else}
			<Checked size={1.2} />
		{/if}
	</button>
</label>
