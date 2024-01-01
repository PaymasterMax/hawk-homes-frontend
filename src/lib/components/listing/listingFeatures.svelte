<script lang="ts">
	import { page } from '$app/stores';
	import AwaitData from '$components/common/awaitData.svelte';

	import type { addListPayload } from '$interface';
	import type { commonProp } from '$interface/api';
	import { Utility } from '$utility';

	export let payload: addListPayload;
	export let errors: any;
	const features = Utility.queryGaphql<{ data: { features: commonProp[] } }>(
		fetch,
		`{
	features{
	  id
	  name
	}
	}`
	);
</script>

<section class="p-6 flex flex-col gap-4 bg-white  rounded-2xl ">
	<h1 class="stat-title">Listing Features</h1>
	<div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 h-96 overflow-y-scroll">
		<AwaitData promise={features} let:prop={resolve}>
			{#each resolve.data.features as item}
				<div class="form-control">
					<label class="label cursor-pointer justify-start  gap-4">
						<input
							type="checkbox"
							class="checkbox border-slate-300"
							value={item.id}
							bind:group={payload['features']}
						/>
						<span class="label-text">{item.name}</span>
					</label>
				</div>
			{/each}
		</AwaitData>
	</div>
	{#if errors?.features}
		<!-- content here --><label for="" class="label">
			<span class="label-text-alt text-error">{errors?.features[0]}</span>
		</label>
	{/if}
</section>
