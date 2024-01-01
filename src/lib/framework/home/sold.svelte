<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import AwaitData from '$components/common/awaitData.svelte';
	import { fetchHouses } from '$helpers';
	import ListHouses from '$components/others/listHouses.svelte';
	import { HouseStatus } from '$interface/house';

	export let title: string;
	let element: any;
	let intersecting: any;

	let houses = fetchHouses();
</script>

<IntersectionObserver once {element} threshold={0.2} bind:intersecting>
	<section bind:this={element} class="py-14 h-max overflow-hidden">
		{#if intersecting}
			<!-- content here -->

			<div class="lg:w-5/6 w-11/12 mx-auto flex flex-col">
				<div class="flex justify-between ">
					<div class="flex flex-col gap-4 justify-end">
						<span class="flex items-center gap-2">
							<span class="w-5 bg-reddish rounded-full h-[1px] block" />
							<h3 class="text-blueish uppercase font-opensans text-sm font-semibold">
								{title}
							</h3>
						</span>
						<h4 class="text-blackish font-oxy font-bold  text-4xl ">
							{title}
						</h4>
					</div>
					<div class="flex gap-4 items-end ">
						<a
							href="/listings/sold"
							class="bg-transparent uppercase  hover:bg-reddish flex gap-4  text-dark  text-sm items-center justify-center  font-semibold hover:text-white py-2 px-4 border border-dark  hover:border-transparent rounded"
						>
							View All
							<iconify-icon
								icon="system-uicons:arrow-right"
								class=" inline text-reddish font-bold"
								width="25"
								height="25"
							/>
						</a>
					</div>
				</div>
				<div class="py-8 grid lg:grid-cols-3  mt-10 gap-x-4 gap-y-6">
					<AwaitData promise={houses} let:prop={resolve}>
						<ListHouses resolve={resolve.data.houses} filter={HouseStatus.Sold} />
					</AwaitData>
				</div>
			</div>
		{/if}
	</section>
</IntersectionObserver>
