<script lang="ts">
	import Icon from '$components/common/icon.svelte';
	import compareHouses from '$lib/store';
	let showOnPx = 150;
	let hidden = true;
	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />
<slot />
<div class="fixed block  bottom-20 right-8 z-40">
	<div class="tooltip" data-tip="Compare">
		<a href="/compare">
			<button class="btn-circle btn bg-teal-700 relative hover:bg-gray-900">
				<Icon name="ic:baseline-compare-arrows" color="text-yellow-500" size={21} />
				<span
					class="w-5 h-5 rounded-full grid place-items-center bg-yellow-900 text-white absolute -top-1 right-1 text-xs"
					>{$compareHouses.houses.length}</span
				>
			</button></a
		>
	</div>
</div>
{#if !hidden}
	<!-- content here -->
	<div class="fixed block  bottom-5 right-8 z-40">
		<button
			class="btn-circle btn bg-red-600 relative hover:bg-red-900"
			on:click={() => document.body.scrollIntoView()}
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				class="h-4 w-4"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<path
					fill="#fff"
					d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
				/>
			</svg>
		</button>
	</div>
{/if}
