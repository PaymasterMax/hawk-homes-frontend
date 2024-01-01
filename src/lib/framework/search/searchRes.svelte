<script lang="ts">
	import ListHouses from '../../components/others/listHouses.svelte';
	import AwaitData from '$components/common/awaitData.svelte';
	import { HouseStatus } from '$interface/house';
	export let houses: Promise<any>;
	export let sort: HouseStatus = HouseStatus.all;
</script>

<AwaitData promise={houses} let:prop={resolve}>
	<section class="h-max" id="result">
		<div class="py-4 flex justify-between">
			<div class="flex items-center gap-4">
				<span class="stat-value">{resolve.data?.houses?.length ?? 0}</span>

				Listings Found
			</div>
			<div class="bg-[#f6f6f6] flex items-center gap-4 px-8 py-4 text-gray-400">
				<span>Filter By:</span>
				<select
					id="hs-select-label"
					class=" select select-bordered select-sm "
					bind:value={sort}
				>
					{#each Object.entries(HouseStatus) as [k, v]}
						<option value={v}>{k}</option>
					{/each}
				</select>
			</div>
		</div>

		<div class="grid lg:grid-cols-3  mt-5 gap-x-4 gap-y-6">
			<ListHouses resolve={resolve.data?.houses ?? []} bind:filter={sort} />
		</div>
	</section>
</AwaitData>
