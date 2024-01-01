<script lang="ts">
	import Icon from '$components/common/icon.svelte';
	import ListingMap from '$components/listing/listingMap.svelte';
	import { PUBLIC_AWS_S3BUCKET_URL } from '$env/static/public';
	import type { HouseFetch } from '$interface/house';
	import { Utility } from '$utility';
	import Carousel from 'svelte-carousel';
	import { Motion } from 'svelte-motion';
	export let house: HouseFetch;

	const {
		id,
		property: {
			name,
			owner: {
				first_name,
				last_name,
				profile: { email_addr, phone }
			},
			address,
			agency: { name: agencyName, id: agencyId },
			land_size,
			features: propFtrs
		},
		cost,
		category,
		status,
		features,
		date_added,
		additional_info,
		photos
	} = house;

	const paragraphs = Utility.splitParagraph(additional_info);
</script>

<section class="h-screen  absolute bg-white inset-0 ">
	<div class=" h-1/2 relative bg-gray-500">
		<div class="h-screen w-full bg-black  overflow-hidden">
			<Carousel let:loaded arrows={false} let:pagesCount let:currentPageIndex let:showPage>
				<div slot="dots" class="custom-dots">
					<div class=" left-8   absolute bottom-16 w-5/6 px-8  z-30 text-white">
						<div class="flex justify-center  overflow-x-scroll x gap-4  ">
							{#each Array(pagesCount) as _, pageIndex (pageIndex)}
								{#if currentPageIndex === pageIndex}
									<Icon name="akar-icons:radio-fill" />
								{:else}
									<button on:click={() => showPage(pageIndex)}>
										<Icon name="akar-icons:radio" /></button
									>
								{/if}
							{/each}
						</div>
					</div>
				</div>
				{#each photos as src, imageIndex (src)}
					<div class="h-96">
						{#if loaded.includes(imageIndex)}
							<img src="{PUBLIC_AWS_S3BUCKET_URL}{src}" alt="" class="aspect" />
						{/if}
					</div>
				{/each}
			</Carousel>
		</div>
	</div>
	<Motion initial={{ y: 10 }} animate={{ y: 0 }} transition={{ duration: 1 }} let:motion>
		<div
			use:motion
			class="bg-white min-h-96 rounded-t-3xl w-full relative -top-10  p-4 flex flex-col gap-4 "
		>
			<h1 class=" text-2xl font-extrabold  font-oxy w-full truncate capitalize">
				{name}
			</h1>
			<span class="font-bold text-reddish"> Kes {cost.toLocaleString()}</span>
			<div class="flex items-center gap-2 col-span-2 text-xs">
				<iconify-icon
					icon="ph:map-pin"
					class=" inline text-blueish "
					width="16"
					height="16"
				/>
				<span>{address}</span>
			</div>
			<div class="flex items-center gap-4 col-span-2">
				<div class="flex gap-4 items-center ">
					<iconify-icon
						icon="tabler:bed-filled"
						class=" inline text-blueish "
						width="16"
						height="16"
					/>
					<div class="text-xs text-dark font-bold">{category.name}</div>
				</div>

				<div class="flex gap-4 items-center ">
					<iconify-icon
						icon="material-symbols:square-foot-sharp"
						class=" inline text-blueish "
						width="16"
						height="16"
					/>
					<div class="text-xs text-dark font-bold">{land_size} sqft</div>
				</div>
			</div>
			<div class="flex  gap-2 my-1 capitalize ">
				<div class="flex items-center gap-2">
					<iconify-icon
						icon="openmoji:location-indicator-red"
						class=" inline text-reddish "
						width="26"
						height="26"
					/>
					<i class="h-6 w-0.5 bg-hold" />
					<a href="#map1" class=" text-xs  underline">See Map</a>
				</div>
			</div>
			<div class="w-full  grid-cols-3 grid gap-1 ">
				{#each Utility.addProps(house) as item}
					{@const [k, v] = Object.entries(item)}
					<div class="flex items-center gap-2 text-sm capitalize ">
						<iconify-icon
							icon="octicon:play-24"
							class=" inline text-reddish "
							width="16"
							height="16"
						/>
						<span class="font-bold">{k[0]}:</span>
						{#if k[0] === 'size'}
							<span class="text-dark"> {k[1]} Sqft</span>
						{:else}
							<span class="text-dark"> {k[1]}</span>
						{/if}
					</div>
				{/each}
			</div>
			<h2 class="text-xl label-text">Listing Features</h2>
			<div class="grid grid-cols-2 gap-1">
				{#each features as item}
					<div class="flex items-center gap-2 text-sm capitalize">
						<iconify-icon
							icon="ei:check"
							class=" inline text-grennish "
							width="16"
							height="16"
						/>
						<span class="font-bold">{item.name}</span>
					</div>
				{/each}
			</div>
			<h2 class="text-xl label-text">Property Features</h2>
			<div class="grid grid-cols-2 gap-1">
				{#each propFtrs as item}
					<div class="flex items-center gap-2 text-sm capitalize">
						<iconify-icon
							icon="ei:check"
							class=" inline text-grennish "
							width="16"
							height="16"
						/>
						<span class="font-bold">{item.name}</span>
					</div>
				{:else}
					<Icon name="ic:twotone-no-sim" color="text-reddish" size={23} />
				{/each}
			</div>
			<div class="flex flex-col gap-2 border-b pb-5 relative">
				<h2 class="text-xl label-text">Details</h2>

				<!-- content here --><button
					class="btn btn-success uppercase btn-xs text-xs text-alice w-max"
					>{status}</button
				>

				<div class="w-full overflow-hidden">
					{#each paragraphs as paragraph, index}
						<p class="text-dark text-sm mt-5 whitespace-normal">
							{paragraph}{index !== paragraphs.length - 1 ? '.' : ''}
						</p>
					{/each}
				</div>
				<div>
					<h1 class="label-text text-xl ">Listing Tour</h1>
					<div class="bg-blue-100 w-full my-5 h-72 overflow-hidden relative stats ">
						<iframe
							class="w-full h-full"
							src="https://www.youtube.com/embed/0TKuRugVQes?si=XrtIRYm_Vxo7KPwR"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						/>
					</div>
				</div>
				<div id="map1">
					<h1 class="label-text text-xl ">Location</h1>
					<div class="bg-blue-100 w-full my-5 h-72 overflow-hidden relative stats ">
						<ListingMap />
					</div>
				</div>
				<div class="grid grid-cols-2 text-xs gap-2  w-full ">
					<span class="flex items-center gap-1"
						>Pub: <span class="text-blueish  "
							>{new Date(date_added).toLocaleDateString('en-US', {
								day: '2-digit',
								month: 'short',
								year: 'numeric'
							})}</span
						></span
					><span class="flex items-center gap-2 justify-end"
						><Icon name="ph:eye-thin" color="text-dark" />
						<span class="text-blueish ">1,115</span></span
					>
					<span class="flex items-center col-span-2 gap-1"
						>ID: <span class="text-blueish ">{id}</span></span
					>
				</div>
			</div>
			<div
				class="pb-5 border-b flex items-center justify-between pr-10 relative z-50 bg-white "
			>
				<div class="flex items-center gap-4">
					<div class="avatar">
						<div class="w-10 rounded-full">
							<img
								src="https://ui-avatars.com/api/?name={first_name}+{last_name}&background=random"
								alt=""
							/>
						</div>
					</div>
					<div class="flex flex-col gap-2">
						<b class="font-extrabold text-sm underline">{first_name}</b>
						<a href="/agency/{agencyId}"
							><small class="text-dark text-xs">{agencyName}</small></a
						>
					</div>
				</div>

				<div class="flex items-center gap-5 self-end ">
					<a href="mailto:{email_addr}">
						<iconify-icon
							icon="carbon:email"
							class=" inline text-reddish "
							width="25"
							height="25"
						/>
					</a>

					<a href="tel:{phone}">
						<iconify-icon
							icon="fluent:phone-shake-20-regular"
							class=" inline text-reddish "
							width="25"
							height="25"
						/>
					</a>
				</div>
			</div>
		</div>
	</Motion>
</section>

<style>
	::-webkit-scrollbar {
		display: none;
	}
</style>
