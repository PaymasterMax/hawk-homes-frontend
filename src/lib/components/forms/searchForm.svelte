<script lang="ts">
	import { nairobiConstituencies } from '$helpers';
	import type { PropertySearchFilter } from '$interface/house';
	export let payload: PropertySearchFilter;
</script>

<div class="lg:col-span-3 col-span-1  overflow-hidden h-max ">
	<div class="bg-white w-full  flex flex-col lg:items-center lg:flex-row gap-2 rounded-lg ">
		<div class="form-control  p-2 lg:w-2/6 w-full">
			<label for="" class="label">
				<span class="label-text">Location</span>
			</label>
			<br />
			<select
				class="select select-bordered border-slate-100   outline-light-purple text-light-purple"
				bind:value={payload['location']}
			>
				{#each nairobiConstituencies as k}
					<option value={k}>{k}</option>
				{/each}
			</select>
		</div>

		<div class="form-control lg:w-4/6 w-full  p-2">
			<label class="label" for="">
				<span class="label-text">Cost</span>
			</label>
			<div class="grid grid-cols-2 gap-6">
				<div class="flex flex-col">
					<label for="" class="block text-xs font-medium mb-2 text-dark capitalize"
						>From</label
					>
					<input
						type="number"
						placeholder="From"
						class="formInput placeholder:text-light-purple "
						bind:value={payload['cost']['min']}
						min={3500}
					/>
				</div>
				<div class="flex flex-col">
					<label for="" class="block text-xs font-medium mb-2 text-dark capitalize"
						>To</label
					>
					<input
						type="number"
						placeholder="To"
						class="formInput placeholder:text-light-purple "
						bind:value={payload['cost']['max']}
						min={3500}
					/>
				</div>
			</div>
		</div>
	</div>
</div>
