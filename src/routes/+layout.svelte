<script>
	import Content from "../components/Content.svelte";
	import Sidebar from "../components/Sidebar.svelte";

	export let data
	
</script>

<h1>{data.users.name}</h1>


<div >
<Sidebar {data}/>
<slot users={data}/>

</div>

<style>
	
</style>
