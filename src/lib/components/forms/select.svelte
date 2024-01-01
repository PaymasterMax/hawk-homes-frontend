<script lang="ts">
	import type { Payloads } from '$interface';
	import AwaitData from './awaitData.svelte';

	// export let data: {
	// 	label: string;
	// 	options: string[] | number[];
	// 	key: string;
	// };
	export let data: any;

	export let payload: Payloads;
</script>

<div class="form-control lg:w-1/2  w-full">
	<label for="" class="label">
		<span class="label-text">{data.label}</span>
	</label>
	<select
		class="select select-bordered border-slate-100   outline-light-purple text-light-purple"
		bind:value={payload[data.key]}
	>
		<AwaitData promise={data.options} let:prop={resolve}>
			{#each resolve as k}
				<option value={Object.values(k)[0]}>{Object.values(k)[1]}</option>
			{/each}</AwaitData
		>
	</select>
</div>
