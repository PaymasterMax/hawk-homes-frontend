<script lang="ts">
	import type { addListPayload } from '$interface';
	export let payload: addListPayload;
	export let errors: any;
</script>

<div class="p-6 grid grid-cols-2 gap-4 bg-white rounded-2xl">
	<div class="form-control w-full  ">
		<label class="label" for="">
			<span class="label-text">Total Available</span>
		</label>

		<input
			type="number"
			min={1}
			placeholder="Type here"
			class="formInput placeholder:text-light-purple w-full"
			bind:value={payload['total_available']}
		/>{#if errors?.total_available}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{errors?.total_available[0]}</span>
			</label>
		{/if}
	</div>
	<div class="form-control w-full  ">
		<label class="label" for="">
			<span class="label-text">Cost</span>
		</label>

		<input
			type="number"
			placeholder="Type here"
			class="formInput placeholder:text-light-purple w-full"
			bind:value={payload['cost']}
			min={1000}
		/>

		<!-- content here --><label for="" class="label"
			>{#if errors?.cost}
				<span class="label-text-alt text-error">{errors?.cost[0]}</span>
			{/if}
			<span class="label-text-alt text-slate-400">Min:Kes 1,000-</span>
		</label>
	</div>
</div>
