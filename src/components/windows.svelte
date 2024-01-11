<script>
	import FuncGroupList from './funcGroupList.svelte';
	export let windowData = [];
</script>

<h1 class="text-xl bg-blue-100 rounded-sm py-2 text-center mb-2">Windows(窗口相关)</h1>
<FuncGroupList funcGroup={windowData} />
