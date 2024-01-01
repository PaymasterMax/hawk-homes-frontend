<script lang="ts">
	import { Nav } from '$components/common';
	import 'modern-normalize/modern-normalize.css';
	import '../styles/app.css';
	import 'iconify-icon';
	import Footer from '$components/common/footer.svelte';
	import { getContext, onMount, setContext } from 'svelte';
	import Nav2 from '$components/common/nav2.svelte';
	import MediaQuery from '../utility/mediaQuery.svelte';
	import type { LayoutData } from './$types';
	import { fly } from 'svelte/transition';
	import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/stores';
	import toast, { Toaster } from 'svelte-french-toast';

	export let data: LayoutData;

	let ready = false;
	onMount(() => {
		ready = true;
	});
	const flash = getFlash(page, {
		flashCookieOptions: {
			secure: false
		}
	});
	$: if ($flash) {
		switch ($flash.type) {
			case 'success':
				toast.success($flash.message);
				break;
			case 'error':
				toast.error($flash.message);
				break;
			default:
				break;
		}
	}
</script>

{#if ready}
	<Toaster />
	<MediaQuery query="(min-width: 769px)" let:matches>
		{#if matches}
			<Nav />
			{#key data.url}
				<div
					class=""
					in:fly|global={{ duration: 500, delay: 100, x: -200 }}
					out:fly|global={{ duration: 300, x: 200 }}
				>
					<slot />
				</div>
			{/key}
			<Footer />
		{/if}
	</MediaQuery>
	<MediaQuery query="(min-width: 321px) and (max-width: 768px)" let:matches>
		{#if matches}
			<Nav2 />
			<!-- <Header2 device={'tablet'} /> -->
			<slot />
			{#if !data.url.includes('asset')}
				<!-- content here -->

				<Footer />
			{/if}
		{/if}
	</MediaQuery>

	<MediaQuery query="(max-width: 321px)" let:matches>
		{#if matches}
			<Nav2 />
			{#key data.url}
				<main class="overflow-hidden">
					<slot />
				</main>
			{/key}
			{#if !data.url.includes('asset')}
				<!-- content here -->

				<Footer />
			{/if}<style>
				* {
					border: 1px solid red;
				}
			</style>
		{/if}
	</MediaQuery>
{:else}
	<section class="grid place-items-center h-screen overflow-hidden">
		<video src="/images/home/loader.webm" autoplay muted loop width="50" height="50" />
	</section>
{/if}
