<script lang="ts">
	import { page } from '$app/stores';
	import SearchRes from '$lib/framework/search/searchRes.svelte';
	import { houseQuery, nairobiConstituencies } from '$helpers';

	import { HouseStatus, type HouseFetch, type PropertySearchFilter } from '$interface/house';
	import { Utility } from '$utility';
	import AdvSearch from '$components/forms/advSearch.svelte';
	import { goto } from '$app/navigation';

	//Init Payload **needed** for clearing the new payload
	const initPayload: PropertySearchFilter = {
		location: nairobiConstituencies[0],
		cost: { max: 30000, min: 3500 },
		size: { max: 4500, min: 2000 },
		year_built: { max: 2023, min: 2005 },
		category: 'default',
		keyword: '',
		features: [],
		type: 'default',
		radius: 'default'
	};
	//set the dynamic payload
	let payload: PropertySearchFilter = { ...initPayload };
	//generate Params for the query
	const genParam = () => {
		const yearBuiltParam = `year_built:{min:${+payload.year_built.min},max:${+payload.year_built
			.max}}`;
		const costParam = `cost:{max:${+payload.cost.max},min:${+payload.cost.min}}`;
		const sizeParam = `land_size:{max:${+payload.size.max},min:${+payload.size.min}}`;
		const featuresParam = `features:[${payload.features
			.map((feature) => `"${feature}"`)
			.join(', ')}]`;

		let params = [yearBuiltParam, costParam, featuresParam, sizeParam];

		if (payload.category !== 'default') {
			params.push(`category:["${payload.category}"]`);
		}
		if (payload.type !== 'default') {
			params.push(`type:["${payload.type}"]`);
		}

		return params.join(',');
	};
	//fetch houses passed from the header from the home page
	let houses = Utility.queryGaphql<{
		data: { houses: HouseFetch[] };
		errors: [
			{
				extensions: {
					title: string;
				};
			}
		];
	}>(fetch, $page.data?.query);
	//fetch houses from the user payload in the search page
	const handleSubmit = async () => {
		const query = `
		{
houses(${genParam()}) {
   ${houseQuery}
}
    `;

		const res = Utility.queryGaphql<{
			data: { houses: HouseFetch[] };
			errors: [
				{
					extensions: {
						title: string;
					};
				}
			];
		}>(fetch, query);

		houses = res;
	};
	//set loading state during search
	let loading = false;
</script>

<header class="min-h-screen bg-bg py-14 overflow-hidden">
	<section class="lg:w-4/5 w-full px-1 mx-auto flex flex-col gap-4">
		<h1 class="stat-title font-bold  ">Search listings</h1>
		<AdvSearch bind:payload />

		<div class=" flex items-center justify-center">
			<div class="flex gap-4">
				<button
					on:click={async () => {
						loading = true;
						await handleSubmit();
						loading = false;
					}}
					disabled={loading}
					class="btn bg-reddish disabled:shadow-none text-alice shadow-lg shadow-reddish border-none w-max hover:bg-red-400"
				>
					{#if loading}
						<span class="loading loading-spinner" />
					{/if} Search</button
				>
				<button
					class="btn btn-outline "
					on:click={() => {
						payload = { ...initPayload };
					}}>Clear</button
				>
			</div>
		</div>
		<SearchRes {houses} sort={$page.data.filter || HouseStatus.all} />
	</section>
</header>
