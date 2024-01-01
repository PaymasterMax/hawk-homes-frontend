<script lang="ts">
	import AwaitData from '$components/common/awaitData.svelte';

	import type { addListPayload } from '$interface';
	import type { commonProp } from '$interface/api';
	import { HouseStatus } from '$interface/house';
	import { Utility } from '$utility';
	export let errors: any;
	export let payload: addListPayload;
	const genQuery = (prop: string) => {
		return `{
	${prop}{
	  id
	  name
	}
	}`;
	};
	const queryGaphql = <T>(url: string) => Utility.queryGaphql<T>(fetch, url);
	const categories = queryGaphql<{ data: { categories: commonProp[] } }>(genQuery('categories')),
		properties = queryGaphql<{ data: { properties: commonProp[] } }>(genQuery('properties'));
</script>

<div class="flex flex-col gap-4 bg-white rounded-2xl p-6">
	<div class="form-control lg:w-1/2  w-full">
		<label for="" class="label">
			<span class="label-text">Properties</span>
		</label>
		<select
			class="select select-bordered border-slate-100   outline-light-purple text-light-purple"
			bind:value={payload['property']}
			><option value={'default'} selected disabled>Choose Property</option>
			<AwaitData promise={properties} let:prop={resolve}>
				{#each resolve.data.properties as k}
					<option value={Object.values(k)[0]}>{Object.values(k)[1]}</option>
				{/each}</AwaitData
			>
		</select>
		{#if errors?.property}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{errors?.property[0]}</span>
			</label>
		{/if}
	</div>
	<div class="form-control lg:w-1/2  w-full">
		<label for="" class="label">
			<span class="label-text capitalize">categories</span>
		</label>
		<select
			class="select select-bordered border-slate-100   outline-light-purple text-light-purple"
			bind:value={payload['category']}
		>
			<option value={'default'} selected disabled>Select Category</option>
			<AwaitData promise={categories} let:prop={resolve}>
				{#each resolve.data.categories as k}
					<option value={Object.values(k)[0]}>{Object.values(k)[1]}</option>
				{/each}</AwaitData
			>
		</select>
		{#if errors?.category}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{errors?.category[0]}</span>
			</label>
		{/if}
	</div>
	<div class="form-control lg:w-1/2  w-full">
		<label for="" class="label">
			<span class="label-text">House Status</span>
		</label>
		<select
			class="select select-bordered border-slate-100   outline-light-purple text-light-purple"
			bind:value={payload['status']}
			><option value={'All'} selected disabled>Pick Status</option>
			{#each Object.values(HouseStatus) as k}
				{#if k !== 'All'}
					<option value={k}>{k}</option>
					<!-- content here -->
				{/if}
			{/each}
		</select>
		{#if errors?.status}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{errors?.status[0]}</span>
			</label>
		{/if}
	</div>
</div>
