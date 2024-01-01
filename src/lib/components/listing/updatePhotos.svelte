<script lang="ts">
	import Icon from '$components/common/icon.svelte';
	import { PUBLIC_AWS_S3BUCKET_URL } from '$env/static/public';
	export let photos: string[];

	function removeImage(index: number) {
		photos.splice(index, 1);
		photos = photos;
	}
</script>

<div class="border lg:p-8 p-4 grid lg:grid-cols-5 grid-cols-2 gap-1">
	{#each photos as item, i}
		<div class="h-36 border relative overflow-hidden">
			<img src="{PUBLIC_AWS_S3BUCKET_URL}{item}" class="aspect-auto" alt="" />
			<button
				on:click={() => removeImage(i)}
				class="rounded-full absolute top-2 right-2 cursor-pointer h-5 w-5 hover:text-blueish text-reddish"
			>
				<Icon name="carbon:close-filled" size={18} />
			</button>
		</div>
	{:else}
		<div class="col-span-4">
			<h1>No Images Here</h1>
			<Icon name="pepicons-print:photo-off" size={30} color="text-reddish" />
		</div>
	{/each}
</div>
