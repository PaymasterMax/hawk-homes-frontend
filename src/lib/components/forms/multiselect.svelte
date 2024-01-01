<script lang="ts">
	import type { Payloads, formInputData } from '$interface';
	import { Utility } from '$utility';
	interface multi extends formInputData {
		data: any[];
	}
	export let data: multi;
	export let placeholder: string;
	export let payload: Payloads;
	let isOpen = false;
	let items: string[] = [];
	let term: string;

	function handleClickOutside(event: any) {
		const multi = document.querySelector('#' + data.key);
		if (multi && !multi.contains(event.target)) {
			isOpen = false;
		}
	}

	window.addEventListener('click', handleClickOutside);
	$: payload[data.key] = items;
</script>

<div class="form-control w-full max-w-xs">
	<label class="label" for="">
		<span class="label-text">{data.label}</span>
	</label>
	<div
		on:blur={() => {
			isOpen = false;
		}}
		class="relative w-full flex flex-col gap-2 "
		id={data.key}
	>
		<div class="border border-slate-100 h-10 rounded-lg flex items-center justify-between px-3">
			<button
				class=" w-5/6 h-full flex items-center justify-start multi gap-2 overflow-x-scroll overflow-y-hidden"
				on:click={() => {
					isOpen = !isOpen;
				}}
			>
				{#if !items.length}
					<small class="text-xs font-outfit text-light-purple">{placeholder}</small>
				{/if}

				{#each items as item}
					<span
						class=" border border-teal px-2 py-0.5 rounded-full text-xs text-mixed flex items-center gap-2"
						>{item}
						<button
							class="text-dark-blue h-5 w-5 hover:text-red"
							on:click|stopPropagation={() => {
								items = items.filter((x) => item !== x);
							}}>&times;</button
						>
					</span>
				{/each}
			</button>
			<button
				class="text-dark-blue h-5 w-5"
				on:click|stopPropagation={() => {
					items = [];
				}}>&times;</button
			>
			<span class="h-5/6 block w-0.5 bg-mixed" />
			<div class="caret" />
		</div>
		{#if isOpen}
			<div
				class="absolute top-full w-full z-30 flex gap-1 pt-1 flex-col mt-1 border h-24 bg-white border-slate rounded-lg shadow-xl"
			>
				<div class="px-2 flex flex-col gap-1">
					<input
						type="search"
						class="input input-bordered input-xs text-light-purple w-full bg-light-blue placeholder:text-xs"
						placeholder="Search ..."
						bind:value={term}
					/>
					<hr />
				</div>

				<ul class="flex flex-col overflow-y-scroll">
					{#each Utility.filterItems(term, data.data) as item}
						<li
							class="{items.includes(item)
								? 'hidden'
								: 'block'} text-xs px-2 text-dark-blue hover:bg-blue cursor-pointer hover:text-light"
						>
							<button
								on:click={() => {
									items = [...items, item];
								}}
								class="w-full h-full flex items-start capitalize justify-start"
							>
								{item}
							</button>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</div>

<style>
	.caret {
		translate: 0 25%;
		border: 0.25em solid transparent;
		border-top-color: #777;
	}
</style>
