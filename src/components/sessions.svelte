<script>
	import FuncGroupList from './funcGroupList.svelte';

	export let sessions = [];
</script>

<h1
	class="text-xl bg-blue-100 dark:bg-cyan-800 dark:text-slate-50 rounded-sm py-2 text-center mb-2"
>
	Sessions(会话相关)
</h1>
<FuncGroupList funcGroup={sessions} />
