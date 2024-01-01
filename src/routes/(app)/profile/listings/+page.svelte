<script lang="ts">
	import Icon from '$components/common/icon.svelte';
	import ListHouses from '$components/others/listHouses.svelte';
	import { HouseStatus } from '$interface/house';
</script>

<div class="flex  lg:flex-row flex-col justify-between gap-4">
	<div class="grid grid-cols-3 lg:justify-center lg:w-2/6 w-11/12 gap-4">
		{#each ['All', 'Active', 'Finish'] as item, i}
			<button class="btn btn-md capitalize  {i === 0 ? 'bg-blueish text-white' : 'bg-white'}"
				>{item}</button
			>
		{/each}
	</div>
	<div class="grid  lg:grid-cols-2 grid-cols-1 items-center gap-4">
		<div class="bg-bg px-4 py-2 flex items-center gap-3">
			<label for="category">Sort By: </label>
			<select name="category" id="" class="select select-bordered select-sm">
				<option value="" selected>Newest Listing</option>
			</select>
		</div>
		<input type="search" class="input input-md input-bordered" placeholder="Search" />
	</div>
</div>
<div class="gap-4 w-full grid place-items-center my-5">
	<h1 class="font-bold">You do not have any listings Yet.</h1>
	<a href="/add-listing"
		><button class="btn w-max bg-blueish text-white"
			><Icon name="carbon:add" /> Add Listing</button
		></a
	>
</div>
<section class="py-8 grid lg:grid-cols-3 grid-cols-1 lg:w-5/6 w-11/12 gap-x-4 gap-y-6">
	<!-- <AwaitData promise={[houses]} let:prop={resolve}>
        <ListHouses
            resolve={resolve.data.houses ?? []}
            filter={HouseStatus.all}
        />
    </AwaitData> -->

	<!-- <ListHouses resolve={[]} filter={HouseStatus.all} /> -->
</section>
