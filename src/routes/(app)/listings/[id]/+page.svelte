<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import Letter from '$components/common/letter.svelte';

	import ListHouses from '$components/others/listHouses.svelte';
	import { houseQuery } from '$helpers';

	import type { commonProp } from '$interface/api';
	import { HouseStatus, type HouseFetch } from '$interface/house';
	import { Utility } from '$utility';
	import type { PageData } from './$types';
	import AwaitData from '$components/common/awaitData.svelte';
	export let data: PageData;
	let activeTab: number = 0;
	let sort: HouseStatus = HouseStatus.all;
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
	let intersecting: any;
	const endPoint = `{
        houses(pid: "${data.id}"){
          
            ${houseQuery}
           
            
        
    }`;

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
	let houses = Utility.queryGaphql(fetch, endPoint);
</script>

<svelte:head>
	<title>Property|Jirani</title>
</svelte:head>
<IntersectionObserver once {element} threshold={0.2} bind:intersecting>
	<section
		bind:this={element}
		class="min-h-screen bg-bg flex flex-col py-14 items-center gap-6 overflow-hidden"
	>
		<h1 class="font-bold text-2xl">{data.props.name} Listings</h1>
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
