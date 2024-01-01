<script lang="ts">
	import type { addListPayload } from '$interface';
	import ListingMap from './listingMap.svelte';

	export let payload: {
		coords: [number, number];
	} = {
		coords: [0, 0]
	};
</script>

<div class="p-6 flex flex-col gap-4 bg-white rounded-2xl">
	<h1 class="stat-title">Location</h1>
	<div class="grid grid-cols-2 gap-4">
		{#each ['longitude', 'latitude'] as item, i}
			<div class="form-control w-full  ">
				<label class="label" for="">
					<span class="label-text">{item}</span>
				</label>

				<input
					type="text"
					placeholder="Type here"
					class="formInput placeholder:text-light-purple w-full"
					bind:value={payload['coords'][i]}
				/>
			</div>
		{/each}
	</div>
	<div class="border w-full h-80 relative">
		<ListingMap />
	</div>
</div>
