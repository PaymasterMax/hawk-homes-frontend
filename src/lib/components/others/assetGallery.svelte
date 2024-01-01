<script lang="ts">
	// selected image
	import { tick } from 'svelte';

	import { gsap } from 'gsap';

	import { Flip } from 'gsap/dist/Flip';
	import { PUBLIC_AWS_S3BUCKET_URL } from '$env/static/public';
	gsap.registerPlugin(Flip);
	export let photos: string[];
	let selected = 0;

	async function flip(id: number) {
		const state = Flip.getState('.grid-item');
		// change selected image
		selected = id;
		await tick();

		// flip
		const tl = Flip.from(state, {
			duration: 0.6,
			stagger: 0.04,
			absolute: true
		});
	}
</script>

<section class="h-[70vh] grid grid-cols-5 gap-3 grid-rows-3 transition-all overflow-hidden">
	{#each photos as item, id (item)}
		{@const details = selected === id}
		{@const number = id + 1}

		<button class="grid-item relative " class:details on:click={() => flip(id)}>
			<!-- <div class="title bg-gradient-to-r from-blue-600 to-blueish px-4">
				<h1 class="text-white">Kitchen {number}</h1>
			</div> -->

			<!-- <img src="https://picsum.photos/600/600?random={id}" alt="Placeholder" class="aspect" /> -->
			<img src="{PUBLIC_AWS_S3BUCKET_URL}{item}" alt="Placeholder" class="aspect" />
		</button>
	{/each}
</section>

<style>
	.details {
		grid-row: span 3;
		grid-column: span 2;
	}
</style>
