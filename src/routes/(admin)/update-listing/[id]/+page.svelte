<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/stores';
	import type { addListPayload } from '$interface';
	import MainListing from '$components/listing/mainListing.svelte';

	import UpdatePhotos from '$components/listing/updatePhotos.svelte';
	import { Utility } from '$utility';
	import { updatePayloadSchema } from '$helpers';
	let loading = false;
	const flash = getFlash(page);
	const { id, house } = data;
	const {
		data: { house: h }
	} = house;
	let cur_photos = [...h.photos];
	let errors = {};
	let payload: addListPayload = {
		category: h.category.id,
		additional_info: h.additional_info,
		features: h.features.map((x) => x.id),
		status: h.status,
		cost: h.cost,
		photos: [],
		tags: [],
		total_available: h.total_available ?? 1,
		property: h.property.id,
		id: ''
	};

	const handleSubmit = async () => {
		try {
			const deleted = h.photos.filter((f) => !cur_photos.includes(f));

			if (payload.photos.length + cur_photos.length > 15) {
				$flash = { type: 'error', message: 'Total images should be less than 15' };
				return;
			}

			const results = updatePayloadSchema.parse(payload);

			const photoIds = await Utility.UploadPhotos(payload.photos);
			if (photoIds.status === 201) {
				fetch('/api/house', {
					method: 'PUT',
					body: JSON.stringify({
						...results,
						photos: [...cur_photos, ...photoIds.keys],
						id
					}),
					headers: {
						'content-type': 'application/json'
					}
				})
					.then((res) => res.json())
					.then(async (dt) => {
						if (dt.status === 201) {
							if (deleted.length) {
								await Utility.DeletePhotos(deleted);
							}
							$flash = { type: 'success', message: 'Update Successfully' };
						} else {
							$flash = { type: 'error', message: dt.message };
						}
					});
			} else {
				$flash = { type: 'error', message: photoIds?.message };
			}
		} catch (err: any) {
			if (err.flatten) {
				const { fieldErrors } = err.flatten();
				$flash = { type: 'error', message: 'Form Error!' };
				errors = { ...fieldErrors };
				return;
			}
			console.log(err);
			$flash = { type: 'error', message: 'error Updating' };
		}
	};
</script>

<svelte:head>
	<title>Update Listing | Jirani</title>
</svelte:head>
<div class="bg-white w-full p-8 border-t border-slate-300">
	<h1 class="text-2xl font-bold w-5/6 mx-auto">Update Listing</h1>
</div>

<main class="bg-[#f6f7ff]">
	<MainListing {payload} {errors}>
		<UpdatePhotos bind:photos={cur_photos} />
	</MainListing>
	<div class="lg:w-5/6 w-11/12 mx-auto p-8 ">
		<button
			on:click={async () => {
				loading = true;
				await handleSubmit();
				loading = false;
			}}
			disabled={loading}
			class="btn bg-reddish disabled:shadow-none text-alice shadow-lg shadow-reddish border-none w-max hover:bg-red-400"
		>
			{#if loading}
				<!-- content here --> <span class="loading loading-spinner" />
			{/if} Update Listing</button
		>
	</div>
</main>
