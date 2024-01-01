<script lang="ts">
	import ServiceCard from '$components/cards/serviceCard.svelte';
	import { Motion } from 'svelte-motion';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { services } from '$helpers';

	let element: any;
	let intersecting: any;
</script>

<IntersectionObserver {element} once threshold={0.2} bind:intersecting>
	<section
		bind:this={element}
		class="min-h-screen  flex flex-col py-14 items-center gap-6 overflow-hidden"
	>
		{#if intersecting}
			<span class="flex items-center gap-2">
				<span class="w-5 bg-reddish rounded-full h-[1px] block" />
				<h3 class="text-blueish uppercase font-opensans text-sm font-semibold">
					WHat service we offer
				</h3>
			</span>
			<h4 class="text-blackish font-oxy font-bold leading-10 text-4xl">
				Real Estate Service
			</h4>
			<small class="lg:w-2/6 w-4/6 text-center">
				Find your dream home or property in Kenya with ease. We have a wide selection of
				properties for sale and rent, including apartments, houses, land, and commercial
				properties.
			</small>

			<section class=" grid lg:grid-cols-3 grid-cols-1 lg:w-5/6 w-11/12 gap-x-4 gap-y-6">
				{#each services as item, index}
					<Motion initial={item.init} animate={item.anim} transition={item.trn} let:motion
						><div
							use:motion
							class={`border ${
								item.icon === 'icon-1' ? 'lg:shadow-2xl' : ''
							}  flex flex-col gap-6 h-max items-center py-2`}
						>
							<ServiceCard service={item} />
						</div>
					</Motion>
				{/each}
			</section>

			<a
				href="/services"
				class="bg-transparent uppercase hover:bg-reddish flex gap-4 mt-10 text-dark  text-sm items-center justify-center  font-semibold hover:text-white py-2 px-4 border border-dark  hover:border-transparent rounded"
			>
				View All
				<iconify-icon
					icon="system-uicons:arrow-right"
					class=" inline text-reddish font-bold"
					width="25"
					height="25"
				/>
			</a>
		{/if}
	</section>
</IntersectionObserver>
