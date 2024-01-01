<script lang="ts">
	import Icon from '$components/common/icon.svelte';
	import SendEmail from '$components/forms/sendEmail.svelte';
	import ListingMap from '$components/listing/listingMap.svelte';
	import type { HouseFetch } from '$interface/house';
	import { Utility } from '$utility';

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
			agency: { name: agencyName, address: agencyAddress, id: agencyId },

			features: propFtrs
		},
		cost,
		category,
		status,
		features,
		date_added,
		additional_info
	} = house;

	// Define the maximum character count per paragraph
	const paragraphs = Utility.splitParagraph(additional_info);
</script>

<section class="flex gap-4 ">
	<div class="w-4/6 relative pb-10 overflow-x-hidden">
		<!-- title and desc  -->
		<div class="grid grid-cols-2 gap-4">
			<div class="flex items-center gap-2 col-span-2">
				<!-- content here --><button
					class="btn btn-success uppercase btn-xs text-xs text-alice">{status}</button
				>

				<span class="text-xs font-bold font-oxy capitalize flex gap-2"
					><Icon name="tabler:bed-filled" color="text-blueish" />{category.name}</span
				>
			</div>
			<h1 class="font-oxy font-extrabold text-4xl w-5/6 py-1 truncate">
				{name}
			</h1>
			<div class="flex justify-end items-center text-4xl font-extrabold ">
				Kes {cost.toLocaleString()}
			</div>

			<div class="flex items-center gap-2 col-span-2 text-xs">
				<iconify-icon
					icon="ph:map-pin"
					class=" inline text-reddish "
					width="16"
					height="16"
				/>
				<span>{address}</span>
				<i class="h-full w-0.5 bg-hold" />
				<a href="#map1" class="text-reddish ">See Map</a>
			</div>
		</div>
		<!-- property  -->
		<div class="w-4/6 py-4 grid-cols-2 grid  ">
			{#each Utility.addProps(house) as item}
				{@const [k, v] = Object.entries(item)}
				<div class="flex items-center gap-2 text-sm capitalize py-1">
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
		<!-- prop fetrs  -->
		<div class="flex flex-col gap-6">
			<h2 class="font-bold text-2xl">Listing Features</h2>
			<div class="grid grid-cols-3 gap-1">
				{#each features as item}
					<div class="flex items-center gap-2 text-sm capitalize py-1">
						<iconify-icon
							icon="octicon:play-24"
							class=" inline text-blueish "
							width="16"
							height="16"
						/>

						<span class="font-bold">{item.name}</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-6">
			<h2 class="font-bold text-2xl">Property Features</h2>
			<div class="grid grid-cols-3 gap-1">
				{#each propFtrs as item}
					<div class="flex items-center gap-2 text-sm capitalize py-1">
						<iconify-icon
							icon="octicon:play-24"
							class=" inline text-blueish "
							width="16"
							height="16"
						/>

						<span class="font-bold">{item.name}</span>
					</div>
				{:else}
					<Icon name="ic:twotone-no-sim" color="text-reddish" size={23} />
				{/each}
			</div>
		</div>
		<h2 class="font-bold text-2xl">Details</h2>
		{#each paragraphs as paragraph, index}
			<p class="text-dark text-sm mt-5">
				{paragraph}{index !== paragraphs.length - 1 ? '.' : ''}
			</p>
		{/each}

		<br />
		<h2 class="font-bold text-2xl">Listing Tour</h2>
		<div class="my-5">
			<iframe
				height="400"
				class="w-full"
				src="https://www.youtube.com/embed/0TKuRugVQes?si=XrtIRYm_Vxo7KPwR"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>

		<div id="map1">
			<h1 class="font-bold text-2xl ">Location</h1>
			<div class=" w-full my-5 h-96 relative  p-4 overflow-hidden">
				<ListingMap />
			</div>
		</div>
		<!-- details info  -->
		<div class="flex items-center justify-between text-xs absolute bottom-0 w-full pt-10">
			<span class="flex items-center"
				>Published Date: <span class="text-blueish  font-bold"
					>{new Date(date_added).toLocaleDateString('en-US', {
						day: '2-digit',
						month: 'short',
						year: 'numeric'
					})}</span
				></span
			>
			<span class="flex items-center"
				>Listing ID: <span class="text-blueish font-bold">{id}</span></span
			>
			<span class="flex items-center"
				>Listing Views: <span class="text-blueish font-bold">1,115</span></span
			>
		</div>
	</div>
	<!-- agent Details  -->
	<div class="w-2/6">
		<!-- //agent card  -->
		<div class="bg-alice p-8 flex flex-col gap-6">
			<div class="pb-5 border-b flex items-center justify-between">
				<div class="flex flex-col gap-2">
					<b class="font-extrabold text-xl">{first_name}</b>
					<small class="text-dark">{agencyName}</small>
				</div>
				<div class="avatar online">
					<div class="w-24 rounded-full">
						<img
							src="https://ui-avatars.com/api/?name={first_name}+{last_name}&background=random"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div class="flex items-center gap-2 col-span-2 text-xs">
				<iconify-icon
					icon="ph:map-pin"
					class=" inline text-blueish "
					width="16"
					height="16"
				/>
				<span>{agencyAddress}</span>
			</div>

			<a href="/agency/{agencyId}">
				<button
					class="text-white cursor-pointer  flex gap-2 h-10 items-center justify-center  bg-reddish  focus:ring-4 focus:outline-none focus:ring-reddish
                              font-oxy uppercase shadow-lg shadow-reddish ring-reddish/50  font-bold  text-sm 
                               px-5 py-2.5 text-center  "
				>
					View Profile<iconify-icon
						icon="system-uicons:arrow-right"
						class=" inline text-white font-bold"
						width="25"
						height="25"
					/>
				</button>
			</a>
		</div>
		<!-- agent Number  -->
		<div class="border p-4 flex items-center my-10 gap-4">
			<iconify-icon
				icon="fluent:phone-shake-20-regular"
				class=" inline text-reddish "
				width="26"
				height="26"
			/>
			<span class="font-bold text-xl font-oxy text-blueish">
				<a href="tel:{phone}">{phone}</a></span
			>
		</div>
		<!-- //form  -->
		<SendEmail />
	</div>
</section>
