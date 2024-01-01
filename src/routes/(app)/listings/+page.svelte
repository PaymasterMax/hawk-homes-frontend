<script lang="ts">
	import { Motion } from 'svelte-motion';
	import IntersectionObserver from 'svelte-intersection-observer';

	import { Utility } from '$utility';

	import Letter from '$components/common/letter.svelte';
	import { fetchHouses } from '$helpers';
	import Icon from '$components/common/icon.svelte';
	import ListHouses from '$components/others/listHouses.svelte';

	import type { commonProp } from '$interface/api';
	import AwaitData from '$components/common/awaitData.svelte';
	import { type HouseFetch, HouseStatus } from '$interface/house';

	let activeTab: number = 0;
	const handleTab = (tabValue: number) => {
		activeTab = tabValue;
	};
	let filter = '';
	const getFilteredHouses = (arr: HouseFetch[], id: string) => {
		if (!id) {
			// No filter selected, return all houses
			return arr;
		}
		return arr.filter((x) => x.property.type.id === id);
	};
	let element: any;
	let sort: HouseStatus = HouseStatus.all;
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
	let houses = fetchHouses();
</script>

<svelte:head>
	<title>listings|Jirani</title>
</svelte:head>
<IntersectionObserver once {element} threshold={0.2} bind:intersecting>
	<section
		bind:this={element}
		class="min-h-screen bg-bg flex flex-col py-14 items-center gap-6 overflow-hidden"
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
			<h3 class="text-blueish uppercase font-opensans text-sm font-semibold">All Listings</h3>
		</span>
		<h4 class="text-blackish font-oxy font-bold leading-10 text-4xl capitalize">
			discover properties
		</h4>
		<small class="lg:w-2/6 w-4/6 text-center">
			Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidata proident, sunt in culpa qui officia deserunt mollit
		</small>
		<div class="flex lg:justify-between lg:flex-row flex-col items-center w-5/6 mx-auto">
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
			<div class="bg-[#f6f6f6] flex items-center gap-4 px-8 py-4 text-gray-400">
				<span>Filter By:</span>
				<select
					id="hs-select-label"
					class=" select select-bordered select-sm "
					bind:value={sort}
				>
					<!-- <option value={}>{}</option> -->
					{#each Object.entries(HouseStatus) as [k, v]}
						<option value={v}>{k}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- content here -->
		{#if intersecting}
			<section class="py-8 grid lg:grid-cols-3 grid-cols-1 lg:w-5/6 w-11/12 gap-x-4 gap-y-6">
				<AwaitData promise={houses} let:prop={resolve}>
					<ListHouses
						resolve={getFilteredHouses(resolve.data.houses ?? [], filter)}
						bind:filter={sort}
					/>
				</AwaitData>
			</section>
		{/if}
	</section>
</IntersectionObserver>
<Letter />

<style>
	.active {
		@apply tab-active;
	}
</style>
