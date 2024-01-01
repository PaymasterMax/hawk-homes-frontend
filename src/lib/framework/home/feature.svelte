<script lang="ts">
	import { Motion } from 'svelte-motion';
	import IntersectionObserver from 'svelte-intersection-observer';

	import AwaitData from '$components/common/awaitData.svelte';

	import { fetchHouses } from '$helpers';
	import Icon from '$components/common/icon.svelte';
	import ListHouses from '$components/others/listHouses.svelte';

	import { Utility } from '$utility';
	import type { commonProp } from '$interface/api';
	import { HouseStatus, type HouseFetch } from '$interface/house';

	let houses = fetchHouses();
	let filter = '';
	const getFilteredHouses = (arr: HouseFetch[], id: string) => {
		if (!id) {
			// No filter selected, return all houses
			return arr;
		}
		return arr.filter((x) => x.property.type.id === id);
	};
	let activeTab: number = 0;
	const handleTab = (tabValue: number) => {
		activeTab = tabValue;
	};
	let element: any;
	let intersecting: any;
	const PropertyTypes = `
        {
			propertyTypes {
            id
            name
          }
        }
        `;
	let types = Utility.queryGaphql<{
		data: {
			PropertyTypes: commonProp[];
		};
	}>(fetch, PropertyTypes);
</script>

<IntersectionObserver once {element} threshold={0.2} bind:intersecting>
	<section
		bind:this={element}
		class="h-max bg-bg flex flex-col py-14 items-center gap-6 overflow-hidden"
	>
		<span class="flex items-center gap-2">
			{#if intersecting}
				<Motion
					initial={{ width: 0 }}
					animate={{ width: 20 }}
					transition={{ duration: 0.5, delay: 1 }}
					let:motion
				>
					<span use:motion class=" bg-reddish rounded-full h-[1px] block" />
				</Motion>
			{/if}
			<h3 class="text-blueish uppercase font-opensans text-sm font-semibold">
				Browse Listings
			</h3>
		</span>
		<h4 class="text-blackish font-oxy font-bold leading-10 text-4xl">Featured Listings</h4>
		<small class="lg:w-2/6 w-4/6 text-center">
			Explore Kenya's best properties for sale or rent handpicked by Jirani Properties. Our listings include apartments, houses, land, and commercial properties. Find your dream property today!
		</small>
		<div class="tabs tabs-boxed">
			<AwaitData promise={types} let:prop={resolve}>
				{#each [{ id: '', name: 'all' }, ...resolve.data.propertyTypes] as { id, name }, i}
					{@const active = activeTab === i}
					<button
						class:active
						on:click={() => {
							handleTab(i);
							filter = id;
						}}
						class="tab  lg:tab-lg tab-md capitalize font-bold">{name}</button
					>
				{/each}
			</AwaitData>
		</div>

		<!-- content here -->
		{#if intersecting}
			<section class="py-8 grid lg:grid-cols-3 grid-cols-1 lg:w-5/6 w-11/12 gap-x-4 gap-y-6">
				<AwaitData promise={houses} let:prop={resolve}>
					<ListHouses
						resolve={getFilteredHouses(resolve.data.houses, filter) ?? []}
						filter={HouseStatus.ForRent}
					/>
				</AwaitData>
			</section>
		{/if}

		<a
			href="/listings/featured"
			class="bg-transparent uppercase hover:bg-reddish flex gap-4 mt-10 text-dark  text-sm items-center justify-center  font-semibold hover:text-white py-2 px-4 border border-dark  hover:border-transparent rounded"
		>
			View All
			<iconify-icon
				icon="system-uicons:arrow-right"
				class=" inline text-reddish font-bold"
				width="25"
				height="25"
			/>
		</a>
	</section>
</IntersectionObserver>

<style>
	.active {
		@apply tab-active;
	}
</style>
