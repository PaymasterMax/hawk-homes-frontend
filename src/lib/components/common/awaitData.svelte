<script lang="ts">
	import Icon from '$components/common/icon.svelte';

	export let promise: Promise<any>;
</script>

{#await promise}
	<section class="grid place-items-center w-4/6 mx-auto h-max overflow-hidden">
		<video src="/images/home/loader.webm" autoplay muted loop width="50" height="50" />
	</section>
{:then value}
	<slot prop={value} />
{:catch err}
	<code class="text-error"><Icon name="pixelarticons:alert" color="text-yellow-500" /> {err}</code
	>
{/await}
