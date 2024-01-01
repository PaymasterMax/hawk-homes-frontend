<script lang="ts">
	import type { addListPayload } from '$interface';

	import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/stores';
	import { addPayloadSchema } from '$helpers';
	import MainListing from '$components/listing/mainListing.svelte';
	import { Utility } from '$utility';
	import { HouseStatus } from '$interface/house';
	let loading = false;
	const flash = getFlash(page);
	let errors = {};
	const initPayload = {
		category: 'default',
		additional_info: '',
		features: [],
		status: HouseStatus.all,
		cost: 7500,
		photos: [],
		tags: [],
		total_available: 1,
		property: 'default'
	};
	let payload: addListPayload = { ...initPayload };

	const handleSubmit = async () => {
		try {
			const results = addPayloadSchema.parse(payload);

			const photoIds = await Utility.UploadPhotos(payload.photos);
			if (photoIds.status === 201) {
				fetch('/api/house', {
					method: 'POST',
					body: JSON.stringify({ ...results, photos: photoIds.keys }),
					headers: {
						'content-type': 'application/json'
					}
				})
					.then((res) => res.json())
					.then((dt) => {
						if (dt.status === 201) {
							payload = { ...initPayload };
							errors = {};
							$flash = { type: 'success', message: 'Added Successfully' };
						} else {
							if (dt.status === 401) {
								$flash = { type: 'error', message: 'unauthorized,Please Login' };
							}
							$flash = { type: 'error', message: dt.message };
						}
					})
					.catch((err) => {});
			} else {
				$flash = { type: 'error', message: photoIds?.message };
			}
		} catch (err: any) {
			if (err.flatten) {
				$flash = { type: 'error', message: 'Form Error!' };
				const { fieldErrors } = err.flatten();

				errors = { ...fieldErrors };
				return;
			}
			$flash = { type: 'error', message: 'Unexpected Error' };
		}
	};
</script>

<svelte:head>
	<title>Add | Jirani</title>
</svelte:head>
<div class="bg-white w-full p-8 border-t border-slate-300">
	<h1 class="text-2xl font-bold w-5/6 mx-auto">Add Listing</h1>
</div>
<main class="bg-[#f6f7ff]">
	<MainListing {payload} {errors} />
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
			{/if} Add Listing</button
		>
	</div>
</main>
