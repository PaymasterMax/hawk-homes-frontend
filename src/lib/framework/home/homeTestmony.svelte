<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import TestmonyCard from '$components/cards/testmonyCard.svelte';
	import { Motion } from 'svelte-motion';
	let element: any;
	let intersecting: any;
	const testimonials = [
		{
			comment:
				'I was looking for a new apartment in Nairobi, and I was really impressed with the selection of properties on Jirani Properties.I was able to find the perfect apartment for my needs, and my real estate agent was very helpful throughout the process. I would definitely recommend Jirani Properties to anyone looking for property in Kenya. ',
			by: 'Jane Doe',
			service: 'Nairobi,Kenya'
		},
		{
			comment:
				'I recently sold my house through Jirani Properties, and I had a great experience. My real estate agent was very helpful and knowledgeable, and she was able to sell my house quickly and for a good price. I would definitely recommend Jirani Properties to anyone looking to sell their property in Kenya.',
			by: 'Peter Doe',
			service: 'Kisumu,Kenya'
		},
		{
			comment:
				"I'm a real estate investor, and I use Jirani Properties to find new properties to invest in. I've been really impressed with the platform so far. The database of properties is very comprehensive, and the search tools are very easy to use. I've been able to find some great deals on properties through Jirani Properties.",
			by: ' Jane Doe, Mombasa',
			service: 'Mombasa,Kenya'
		}
	];
</script>

<IntersectionObserver {element} once threshold={0.3} bind:intersecting>
	<section
		bind:this={element}
		class="min-h-screen  bg-bg flex flex-col py-14 items-center gap-6 overflow-hidden"
	>
		{#if intersecting}
			<!-- content here -->

			<span class="flex items-center gap-2">
				<Motion
					initial={{ width: 0 }}
					animate={{ width: 20 }}
					transition={{ duration: 1 }}
					let:motion
				>
					<span use:motion class=" bg-reddish rounded-full h-[1px] block" />
				</Motion>
				<h3 class="text-blueish uppercase font-opensans text-sm font-semibold">
					WHat clients are saying
				</h3>
			</span>
			<h4 class="text-blackish font-oxy font-bold leading-10 text-4xl capitalize">
				user testimonials
			</h4>
			<small class="lg:w-2/6 w-4/6 text-center">
				Hear what our happy customers have to say about their experience finding their dream
				homes!
			</small>

			<section class=" grid lg:grid-cols-3 w-11/12 gap-4 relative">
				{#each testimonials as item, index}
					<Motion
						initial={{ x: '100vw', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.5 * index,
							duration: 0.8,
							type: 'spring',
							stiffness: 200,
							damping: 20
						}}
						let:motion
					>
						<div
							use:motion
							class="p-10 flex flex-col gap-4 lg:shadow-2xl rounded shadow"
						>
							<TestmonyCard testmony={item} />
						</div>
					</Motion>
				{/each}
				<div class="hidden">
					<span
						class="grid place-items-center border h-10 w-10 bg-white absolute -left-5  shadow-lg top-1/2 rounded-full"
					>
						<iconify-icon
							icon="formkit:left"
							class=" inline text-dark  font-bold"
							width="20"
							height="20"
						/></span
					>
					<span
						class="grid place-items-center border h-10 w-10 bg-white absolute -right-5 shadow-lg top-1/2 rounded-full"
					>
						<iconify-icon
							icon="formkit:right"
							class=" inline text-dark  font-bold"
							width="20"
							height="20"
						/></span
					>
				</div>
			</section>
		{/if}
	</section>
</IntersectionObserver>
