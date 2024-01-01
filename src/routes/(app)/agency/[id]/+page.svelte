<script lang="ts">
	import SendEmail from '$components/forms/sendEmail.svelte';
	import SearchRes from '$lib/framework/search/searchRes.svelte';

	import { Motion } from 'svelte-motion';

	export let data: import('./$types').PageData;
	const { agency } = data;
	const { name, address, website_url, licence, phone, properties, id } = agency;
</script>

<svelte:head>
	<title>|Agency</title>
</svelte:head>
<main class="bg-bg w-full overflow-hidden">
	<section class="lg:w-4/6 w-11/12 mx-auto py-14">
		<div class="grid lg:grid-cols-3 w-full gap-6">
			<div class="flex  gap-4 lg:col-span-2">
				<div class="">
					<div class="avatar online">
						<div class="w-36 rounded-full">
							<img
								src="data:image/png;base64,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"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div class=" flex flex-col gap-4">
					<div class="flex flex-col gap-2">
						<b class="font-extrabold text-xl">{name}</b>
						<small class="text-dark">Real Estate Agency</small>
					</div>
					<div class="flex items-center gap-2 col-span-2 text-xs">
						<iconify-icon
							icon="ph:link"
							class=" inline text-blueish "
							width="16"
							height="16"
						/>

						<span>{website_url}</span>
					</div>
					<div class="flex items-center gap-2 col-span-2 text-xs">
						<iconify-icon
							icon="ph:map-pin"
							class=" inline text-blueish "
							width="16"
							height="16"
						/>
						<span>{address}</span>
					</div>
					<div class="flex items-center gap-2 col-span-2 text-xs">
						<iconify-icon
							icon="clarity:license-line"
							class=" inline text-blueish "
							width="16"
							height="16"
						/>
						<span>{licence}</span>
					</div>
					<div class=" flex flex-col text-sm">
						<span class="text-blueish font-opensans  font-bold "
							><a href="tel:{phone}">{phone}</a>
						</span>
						<small
							class="pb-1 flex items-center text-xs gap-1 font-opensans  font-semibold  "
							>Support@Jirani.com
						</small>
					</div>
					<p class="text-dark text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id libero
						quia quasi laudantium asperiores! Rem, sit placeat veritatis culpa eius iure
						voluptatum dolor, nesciunt blanditiis sint maiores repudiandae quod.
					</p>
					<div class="flex gap-4">
						{#each ['mdi:twitter', 'basil:facebook-solid', 'basil:facebook-solid', 'mdi:vimeo', 'ri:linkedin-line'] as item, index}
							<Motion
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 * index, duration: 1 }}
								let:motion
							>
								<span
									use:motion
									class="grid place-items-center  bg-transparent cursor-pointer hover:bg-reddish  border h-8 w-8 rounded-full"
								>
									<iconify-icon
										icon={item}
										class=" inline text-slate-500  font-bold"
										width="16"
										height="16"
									/></span
								>
							</Motion>
						{/each}
					</div>
				</div>
			</div>
			<div class="lg:block hidden">
				<SendEmail />
			</div>
		</div>
		<h1 class="font-bold text-2xl">{name} Properties</h1>
		<div class="grid lg:grid-cols-2  gap-4  py-8">
			{#each properties as item}
				<div class="card lg:card-side bg-base-100 shadow-xl h-56">
					<figure class="lg:w-2/6 h-full">
						<img
							src={item?.photos[0] ??
								'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/10/condo-vs-apartment.jpeg.jpg'}
							alt="Album"
							class="aspect"
						/>
					</figure>
					<div class="card-body">
						<h2 class="card-title">{item.name}</h2>
						<p>{item.additional_info}</p>
						<div class="card-actions justify-end">
							<a href="/listings/{item.id}">
								<button class="btn btn-primary">View Houses</button>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>
