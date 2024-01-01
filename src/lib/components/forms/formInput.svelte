<script lang="ts">
	import type { Payloads, formInputData } from '$interface';

	export let data: formInputData = {
		label: '',
		key: '',
		textarea: false,
		date: false,
		order: ''
	};
	export let payload: Payloads;
</script>

{#if data.textarea}
	<div class="form-control w-full max-w-xs order-{data.order}">
		<label class="label" for="">
			<span class="label-text">{data.label}</span>
		</label>
		<textarea
			class="textarea textarea-bordered bg-alice border-light placeholder:text-light-purple"
			placeholder="Bio"
			bind:value={payload[data.key]}
		/>
	</div>
{:else if data.date}
	<div class="form-control w-full max-w-xs order-{data.order}">
		<label class="label" for="">
			<span class="label-text">{data.label}</span>
		</label>
		<input
			type="datetime-local"
			placeholder="Type here"
			class="formInput placeholder:text-light-purple"
			bind:value={payload[data.key]}
		/>
	</div>
{:else}
	<div class="form-control w-full  ">
		<label class="label" for="">
			<span class="label-text">{data?.label}</span>
		</label>

		<input
			type="number"
			placeholder="Type here"
			class="formInput placeholder:text-light-purple w-full"
			bind:value={payload[data.key]}
		/>
	</div>
{/if}

<style>
</style>
