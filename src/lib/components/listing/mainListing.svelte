<script lang="ts">
	import AddPhotos from '$components/listing/addPhotos.svelte';
	import ListingFeatures from '$components/listing/listingFeatures.svelte';
	import ListingForm from '$components/listing/listingForm.svelte';
	import ListingTitle from '$components/listing/listingTitle.svelte';

	import type { addListPayload } from '$interface';

	export let payload: addListPayload;
	export let errors: any;
</script>

<main class="overflow-visible main h-max lg:p-8 py-4 bg-[#f6f7ff] ">
	<section class="lg:w-5/6 w-11/12 mx-auto flex flex-col gap-5">
		<ListingTitle bind:payload {errors} />
		<ListingForm bind:payload {errors} />
		<ListingFeatures bind:payload {errors} />

		<div class="p-6 flex flex-col gap-4 bg-white rounded-2xl">
			<h1 class="stat-title">Description</h1>
			<textarea
				class="textarea textarea-bordered  border-light placeholder:text-light-purple w-full"
				placeholder="..."
				rows="5"
				bind:value={payload['additional_info']}
			/>
			{#if errors?.additional_info}
				<!-- content here --><label for="" class="label">
					<span class="label-text-alt text-error">{errors?.additional_info[0]}</span>
				</label>
			{/if}
		</div>
		<slot />

		<AddPhotos bind:payload {errors} />
	</section>
</main>
