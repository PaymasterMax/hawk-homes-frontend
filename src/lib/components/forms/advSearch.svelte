<script lang="ts">
	import type { commonProp } from '$interface/api';
	import type { PropertySearchFilter } from '$interface/house';
	import { Utility } from '$utility';
	import AwaitData from '$components/common/awaitData.svelte';

	import SearchForm from './searchForm.svelte';
	export let payload: PropertySearchFilter;

	let selected: string[] = [];
	const feat = `	{
    features{
      id
      name
    }
    }`;
	const propties = `
        {
			categories {
            id
            name
          }
        }
        `;
	const PropertyTypes = `
        {
			propertyTypes {
            id
            name
          }
        }
        `;

	let categories = Utility.queryGaphql<{
		data: {
			categories: commonProp[];
		};
	}>(fetch, propties);
	let types = Utility.queryGaphql<{
		data: {
			categories: commonProp[];
		};
	}>(fetch, PropertyTypes);
	let features = Utility.queryGaphql<{
		data: {
			features: commonProp[];
		};
	}>(fetch, feat);
	$: {
		payload['features'] = selected;
	}
</script>

<section
	class=" grid lg:grid-cols-4 grid-cols-2  lg:grid-rows-3 place-content-center lg:gap-6 gap-4"
>
	<div class="lg:row-span-3 o">
		<h1 class="stat-title my-2">Select Features</h1>

		<!-- content here -->
		<div class="flex gap-4 flex-col lg:h-96 h-52 overflow-y-scroll">
			<AwaitData promise={features} let:prop={resolve}>
				{#each resolve.data.features as item}
					<label class="flex gap-2 cursor-pointer ">
						<input
							type="checkbox"
							class="checkbox "
							value={item.id}
							bind:group={selected}
						/>
						<span class="label-text capitalize">{item.name}</span>
					</label>
				{/each}
			</AwaitData>
		</div>
	</div>
	<SearchForm bind:payload />

	<div>
		<label for="" class="block text-sm font-medium mb-2 text-dark capitalize">Category</label>
		<br />
		<select
			id="hs-select-label"
			class="select select-bordered border-slate-200 w-full "
			bind:value={payload['category']}
		>
			<option value="default" selected disabled>Choose Category</option>
			<AwaitData promise={categories} let:prop={resolve}>
				{#each resolve.data.categories as item}
					<option value={item.id}>{item.name}</option>
				{/each}</AwaitData
			>
		</select>
	</div>
	<div>
		<label for="" class="block text-sm font-medium mb-2 text-dark capitalize"
			>Property Type</label
		>
		<br />
		<select
			id="hs-select-label"
			class="select select-bordered border-slate-200 w-full "
			bind:value={payload['type']}
		>
			<option value="default" selected disabled>Choose Type</option>
			<AwaitData promise={types} let:prop={resolve}>
				{#each resolve.data.propertyTypes as item}
					<option value={item.id}>{item.name}</option>
				{/each}</AwaitData
			>
		</select>
	</div>
	<div>
		<label for="" class="block text-sm font-medium mb-2 text-dark capitalize"
			>Area Radius(Kms)</label
		>
		<br />
		<select
			id="hs-select-label"
			class="select select-bordered border-slate-200 w-full "
			bind:value={payload['radius']}
		>
			<option value="default" selected disabled>Pick Radius</option>

			{#each [2.5, 5.0, 7.5, 10.0, 12.5, 15.0, 17.5, 20.0, 22.5, 25.0] as item}
				<option value={item}>{item}Km</option>
			{/each}
		</select>
	</div>

	<div class="flex flex-col">
		<label for="" class="block text-sm font-medium mb-2 text-dark capitalize"
			>Property Size (Sqft)</label
		>

		<div class="flex justify-between gap-6">
			<div class="flex flex-col">
				<label for="" class="block text-xs font-medium mb-2 text-dark capitalize"
					>From</label
				><input
					type="number"
					id="input-label"
					class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
					bind:value={payload['size']['min']}
					min={1000}
				/>
			</div>
			<div class="flex flex-col">
				<label for="" class="block text-xs font-medium mb-2 text-dark capitalize">To</label>
				<input
					type="number"
					id="input-label"
					class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
					bind:value={payload['size']['max']}
					min={1000}
				/>
			</div>
		</div>
	</div>

	<div class="flex flex-col">
		<label for="" class="block text-sm font-medium mb-2 text-dark capitalize">Year</label>

		<div class="flex justify-between gap-6 w-full">
			<div class="flex flex-col w-1/2">
				<label for="" class="block text-xs font-medium mb-2 text-dark capitalize"
					>From</label
				><select
					id="hs-select-label"
					class="select select-bordered border-slate-200 "
					bind:value={payload['year_built']['min']}
				>
					{#each Utility.yearArray() as number}
						<option value={number}>{number}</option>
					{/each}
				</select>
			</div>
			<div class="flex flex-col w-1/2">
				<label for="" class="block text-xs font-medium mb-2 text-dark capitalize">To</label>
				<select
					id="hs-select-label"
					class="select select-bordered border-slate-200  "
					bind:value={payload['year_built']['max']}
				>
					{#each Utility.yearArray() as number}
						<option value={number}>{number}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>

	<div>
		<label for="" class="block text-sm font-medium mb-2 text-dark capitalize">Keyword</label>
		<br />
		<input
			type="text"
			id="input-label"
			class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
			placeholder={'Enter Search Term'}
			bind:value={payload['keyword']}
		/>
	</div>
</section>
