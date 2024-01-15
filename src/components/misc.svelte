<script>
	import FuncGroupList from './funcGroupList.svelte';

	export let misc = [];
</script>

<h1
	class="text-xl bg-blue-100 dark:bg-cyan-800 dark:text-slate-50 rounded-sm py-2 text-center mb-2"
>
	Misc(其他相关)
</h1>
<FuncGroupList funcGroup={misc} />
