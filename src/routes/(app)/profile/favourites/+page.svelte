<script lang="ts">
	import AwaitData from '$components/common/awaitData.svelte';
	import ListHouses from '$components/others/listHouses.svelte';
	import { HouseStatus } from '$interface/house';
</script>

<div class="flex  lg:flex-row flex-col justify-between gap-4">
	<div class=" w-2/6 ">
		<h1 class="stat-value">0 Results</h1>
	</div>
	<div class="grid lg:grid-cols-2 grid-cols-1 items-center gap-4">
		<div class="bg-bg px-4 py-2 flex items-center gap-3">
			<label for="category">Sort By: </label>
			<select name="category" id="" class="select select-bordered select-sm">
				<option value="" selected>Newest Listing</option>
			</select>
		</div>
		<input type="search" class="input input-md input-bordered" placeholder="Search" />
	</div>
</div>
<section class="py-8 grid lg:grid-cols-3 grid-cols-1 lg:w-5/6 w-11/12 gap-x-4 gap-y-6">
	<!-- <AwaitData promise={[houses]} let:prop={resolve}>
        <ListHouses
            resolve={resolve.data.houses ?? []}
            filter={HouseStatus.all}
        />
    </AwaitData> -->

	<ListHouses resolve={[]} filter={HouseStatus.all} />
</section>
