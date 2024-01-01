<script lang="ts">
	import { invalidateAll, invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import Icon from '$components/common/icon.svelte';
	import { PUBLIC_AWS_S3BUCKET_URL, PUBLIC_BACKEND_URL } from '$env/static/public';
	import type { HouseFetch } from '$interface/house';
	import compareHouses from '$lib/store';
	import { getFlash } from 'sveltekit-flash-message';
	const flash = getFlash(page);
	let open = false;
	export let house: HouseFetch;

	let bgcolor = 'bg-hold';
	$: {
		function statusColor() {
			switch (house.status) {
				case 'Sold':
					return 'bg-reddish';
				case 'Upcoming':
					return 'bg-yelloish';
				case 'Rent':
					return 'bg-papy';
				case 'Auction':
					return 'bg-blackish';
				case 'Sale':
					return 'bg-grennish';

				default:
					return 'bg-yelloish';
			}
		}
		bgcolor = statusColor();
	}
	const handlesubmit = async () => {
		const payload = {
			propId: house.property.id,
			hseId: house.id,
			photoIds: house.photos
		};
		const res = await fetch('/api/house', {
			method: 'DELETE',
			body: JSON.stringify(payload),
			headers: {
				'content-type': 'application/json'
			}
		});
		const dt: { status: number; message: string } = await res.json();
		if (dt.status === 204) {
			open = false;
			$flash = {
				type: 'success',
				message: `Listing delete successfully `
			};
			window.location.reload();

			return;
		}
		$flash = {
			type: 'error',
			message: dt.message
		};
		open = false;
	};
</script>

<div class="flex flex-col h-[500px] shadow-2xl cursor-pointer ">
	<a href="/asset/{house.id}" class="bg-hold w-full h-1/2 relative">
		<!-- content here -->

		<span
			class="text-white absolute top-2 left-2  flex gap-2 h-max w-max items-center  {bgcolor}  focus:ring-4 focus:outline-none focus:ring-reddish
        font-oxy transition-all uppercase  font-bold  text-[11px] 
        px-2 py-1 text-center rounded ">{house.status}</span
		>

		<img src="{PUBLIC_AWS_S3BUCKET_URL}{house.photos[0]}" alt="Placeholder" class="aspect" />
	</a>
	<div class="h-1/2 pt-3 px-4 flex flex-col gap-4  ">
		<a href="/asset/{house.id}" class="flex flex-col gap-4">
			<h2
				class="font-oxy font-bold text-xl capitalize hover:text-reddish w-5/6 overflow-hidden truncate"
			>
				{house.property.name}
			</h2>
			<small class="text-sm text-dark w-5/6 overflow-hidden truncate"
				>{house.property.address}</small
			>
			<big class="text-reddish font-bold">kes {house.cost.toLocaleString()}</big>
			<div class="flex justify-between items-center">
				<span class="flex items-center gap-2">
					<iconify-icon
						icon="octicon:play-24"
						class=" inline text-blueish font-bold"
						width="15"
						height="15"
					/>
					{house.property.land_size} sqft
				</span>
				<span class="flex items-center gap-2">
					<iconify-icon
						icon="octicon:play-24"
						class=" inline text-blueish font-bold"
						width="15"
						height="15"
					/>
					{house.property.type.name}
				</span>
				<span class="flex items-center gap-2">
					<iconify-icon
						icon="octicon:play-24"
						class=" inline text-blueish  font-bold"
						width="15"
						height="15"
					/>
					{house.category.name}
				</span>
			</div></a
		>
		<div class="border-t border-slate-300 flex items-center h-32 justify-between ">
			<span class="flex gap-2 items-center w-3/6 overflow-hidden">
				<div class="avatar online">
					<div class="w-10 rounded-full">
						<img
							src="https://ui-avatars.com/api/?name={house.property.owner
								.first_name}+{house.property.owner.last_name}&background=random"
							alt=""
						/>
					</div>
				</div>
				<small class="truncate">By {house.property.owner.first_name}</small>
			</span>
			<span class="flex items-center  gap-2">
				<button
					class="grid  place-items-center border h-10 w-10 rounded-full {$compareHouses.houses
						.map((x) => x.id)
						.includes(house.id)
						? 'bg-blueish text-white'
						: 'bg-bg'}"
					on:click={() => {
						compareHouses.update((prev) => {
							if (prev.houses.map((x) => x.id).includes(house.id)) {
								return { houses: prev.houses.filter((h) => h.id !== house.id) };
							} else if (prev.houses.length < 3) {
								return { houses: [...prev.houses, house] };
							}
							$flash = {
								type: 'error',
								message: `Can Only Compare 3 Houses `
							};

							return { houses: prev.houses };
						});
					}}
				>
					<Icon name="ic:baseline-compare-arrows" size={20} />
				</button>
				<button class="grid place-items-center border h-10 w-10 rounded-full">
					<Icon name="carbon:favorite" size={20} />
				</button>

				{#if $page.data.user?.perm.role === 'Admin'}
					<!-- content here -->

					<button
						on:click={() => {
							open = true;
						}}
						class="grid place-items-center h-10 w-10 border rounded-full"
					>
						<Icon
							name="material-symbols:delete-outline"
							color="text-reddish"
							size={20}
						/>
					</button>
					<input type="checkbox" id="my_modal_6" class="modal-toggle" />
					<div class="modal overflow-hidden">
						<div class="modal-box">
							<h3 class="font-bold text-lg">Delete Listing!</h3>
							<div class="py-2 form-control gap-2">
								<p class="">
									<b class="text-black">Property:</b>{house.property.name}
								</p>
								<code class="text-grennish"
									><b class="text-black">Id:</b>{house.id}</code
								>
							</div>

							<div class="flex items-center justify-around">
								<button
									class="btn lg:btn-md btn-sm btn-error"
									on:click={handlesubmit}
								>
									<Icon name="material-symbols:delete-outline" /> Delete</button
								>
								<div class="modal-action m-0 ">
									<label for="my_modal_6" class="btn lg:btn-md btn-sm "
										>Close!</label
									>
								</div>
							</div>
						</div>
					</div>

					<a
						href="/update-listing/{house.id}"
						class="grid place-items-center border h-10 w-10 rounded-full"
					>
						<iconify-icon
							icon="tabler:edit"
							class=" inline text-green-600  font-bold"
							width="20"
							height="20"
						/></a
					>
				{/if}
			</span>
		</div>
	</div>
</div>

{#if open}
	<div class="fixed inset-0 grid place-items-center  backdrop-contrast-50 z-50">
		<div class="modal-box overflow-hidden">
			<div class="flex flex-col items-center justify-center gap-4">
				<Icon name="heroicons:exclaimation-circle" size={30} color="text-dark" />
				<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
					Are you sure you want to delete this Listing?
				</h3>
				<div class="py-2 form-control gap-2">
					<p class="text-black">
						<b class="text-black font-sans mr-2">Property:</b>{house.property.name}
					</p>

					<code class="text-blueish"
						><b class="text-black font-sans mr-2">Listing Id:</b>{house.id}</code
					>
				</div>

				<div
					class="flex lg:flex-row flex-col lg:items-center justify-around lg:w-4/6 w-11/12 mx-auto gap-4"
				>
					<button
						on:click={handlesubmit}
						class="btn  btn-md bg-[#b91c1c] btn-error text-white"
					>
						<Icon name="material-symbols:delete-outline" />Yes, I'm sure</button
					>

					<button
						on:click={() => {
							open = false;
						}}
						class="btn  btn-md btn-outline text-black ">Close!</button
					>
				</div>
			</div>
		</div>
	</div>
	<!-- content here -->
{/if}
