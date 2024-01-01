<script lang="ts">
	import Icon from '$components/common/icon.svelte';
	import type { addListPayload } from '$interface';
	import { onMount } from 'svelte';
	export let errors: any;
	let images: File[] = [];
	let imagePreviews: string[] = [];
	export let payload: addListPayload;

	async function updatePayload() {
		payload['photos'] = images;
	}

	$: {
		imagePreviews = images.map((file) => URL.createObjectURL(file));
		updatePayload();
	}

	onMount(() => {
		return () => {
			imagePreviews.forEach((imageUrl) => URL.revokeObjectURL(imageUrl));
		};
	});

	function removeImage(index: number) {
		URL.revokeObjectURL(imagePreviews[index]);
		imagePreviews.splice(index, 1);
		imagePreviews = [...imagePreviews];
		images.splice(index, 1);
		updatePayload();
	}

	function handleFileInputChange(event: Event) {
		const input = event.target as HTMLInputElement;

		if (input.files) {
			images = [...images, ...Array.from(input.files)];
		}
	}
</script>

<div class="p-6 flex flex-col gap-4 bg-white rounded-2xl">
	<h1 class="stat-title">Add Images</h1>
	<div class="border grid place-items-center py-4">
		<div>
			<label for="fileInput" class="btn bg-reddish text-alice">Upload Photos</label>
			<input
				type="file"
				id="fileInput"
				class="hidden file-input file-input-bordered w-full max-w-xs"
				multiple
				on:change={handleFileInputChange}
				accept="image/*"
			/>
		</div>
	</div>
	{#if errors?.photos}
		<!-- content here --><label for="" class="label">
			<span class="label-text-alt text-error">{errors?.photos[0]}</span>
		</label>
	{/if}
	<div class="border lg:p-8 p-4 grid lg:grid-cols-5 grid-cols-2 gap-1">
		{#each imagePreviews as item, i}
			<div class="h-36 border relative overflow-hidden">
				<img src={item} class="aspect-auto" alt="" />
				<button
					on:click={() => removeImage(i)}
					class="rounded-full absolute top-2 right-2 cursor-pointer h-5 w-5 hover:text-blueish text-reddish"
				>
					<Icon name="carbon:close-filled" size={18} />
				</button>
			</div>
		{/each}
	</div>
</div>
