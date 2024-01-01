<script lang="ts">
	import Letter from '$components/common/letter.svelte';
	import { PUBLIC_AWS_S3BUCKET_URL } from '$env/static/public';
	import compareHouses from '$lib/store';
</script>

<svelte:head>
	<title>Compare</title>
</svelte:head>
<main class="block w-screen overflow-scroll px-4">
	<section
		class="lg:w-5/6 w-[100vh] py-14 mx-auto flex flex-col gap-4 lg:overflow-hidden overflow-scroll"
	>
		<h1 class="font-extrabold text-2xl capitalize">Compare</h1>
		<a href="/search" class="w-max"
			><button class="btn btn-outline btn-error btn-sm">Go Back To search</button></a
		>

		<div class="grid grid-cols-4 gap-4">
			<div />
			{#each $compareHouses.houses as item}
				<!-- content here -->
				<div class="h-44 bg-bg relative">
					<img src="{PUBLIC_AWS_S3BUCKET_URL}{item.photos[0]}" alt="" class="aspect" />
					<button
						class="btn btn-xs btn-circle absolute top-3 right-3"
						on:click={() => {
							compareHouses.update((prev) => ({
								houses: prev.houses.filter((h) => h.id !== item.id)
							}));
						}}>x</button
					>
				</div>
			{/each}
		</div>
		<div class="grid grid-cols-4 border ">
			<div class="bg-bg">
				{#each ['Cost', 'Year Built', 'Category', 'Nearest Town', 'Size(sqft)', 'Agency'] as item}
					<div class="px-4 py-2.5  border text-slate-500">{item}</div>
				{/each}
			</div>

			{#each $compareHouses.houses as item}
				<div class="">
					<div class=" py-2 font-bold text-reddish   border flex justify-center text-xl ">
						Kes {item.cost.toLocaleString()}
					</div>
					<div class=" py-2.5  border text-slate-500 grid place-items-center">
						{item.property.year_built}
					</div>
					<div class=" py-2.5  border text-slate-500 grid place-items-center">
						{item.category.name}
					</div>
					<div class=" py-2.5  border text-slate-500 grid place-items-center">
						{item.property.nearest_town}
					</div>
					<div class=" py-2.5  border text-slate-500 grid place-items-center">
						{item.property.land_size} sqft
					</div>
					<div class=" py-2.5  border text-slate-500 grid place-items-center">
						{item.property.agency.name}
					</div>
				</div>
			{/each}
		</div>
		<div class="grid grid-cols-4 gap-4">
			<div />
			{#each $compareHouses.houses as item}
				<!-- content here -->

				<a href="/asset/{item.id}">
					<button class="btn bg-blueish btn-ghost text-alice w-max ">
						View
						<iconify-icon
							icon="uiw:swap-right"
							class=" inline text-white font-bold"
							width="20"
							height="20"
						/>
					</button>
				</a>
			{/each}
		</div>
	</section>
</main>
<Letter />
