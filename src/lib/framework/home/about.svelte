<script lang="ts">
	import { about } from '$helpers';
	import { Motion } from 'svelte-motion';
	import IntersectionObserver from 'svelte-intersection-observer';

	import { onMount } from 'svelte';
	export let type: { name: string; href: string };
	let element: any;
	let intersecting: any;

	onMount(() => {});
</script>

<IntersectionObserver once {element} threshold={0.2} bind:intersecting>
	<section bind:this={element} class=" min-h-screen flex flex-col overflow-hidden" id="about">
		<div class="lg:w-5/6 w-11/12 mx-auto h-full py-20 grid lg:grid-cols-2 relative">
			<div class="pr-8 lg:flex justify-end relative  hidden ">
				<div class=" w-full h-full blog__image overflow-hidden">
					<img
						src="https://i.pinimg.com/564x/91/4c/d4/914cd4e277f8e6ea6db8db0423575b34.jpg"
						alt="Placeholder"
						class=" h-1/2"
					/>
				</div>
				<img
					src="/images/home/obj-2.png"
					alt="cercornet"
					class="absolute w-16 h-16 bottom-0 -left-20"
				/>
			</div>

			<div class="lg:pt-8 flex flex-col gap-8">
				<span class="flex items-center gap-2"
					>{#if intersecting}
						<Motion
							initial={{ width: 0 }}
							animate={{ width: 20 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							let:motion
						>
							<span use:motion class="w-5 bg-reddish rounded-full h-[1px] block" />
						</Motion>
					{/if}
					<h3 class="text-blueish uppercase font-opensans text-sm font-semibold">
						About Us
					</h3>
				</span>
				<h4 class="text-blackish font-oxy font-bold leading-10 text-4xl">
					Your trusted real estate partner for buying and renting in Kenya
				</h4>
				<small>
					Jirani Properties is the leading real estate portal in Kenya, helping thousands
					of people buy, sell, and rent property every year. We offer a wide range of
					services, including:
					{#if intersecting}
						<ul class="flex flex-col gap-4 my-5">
							{#each about as item, index}
								<Motion
									initial={{ x: -50, opacity: 0, scale: 0 }}
									animate={{ x: 0, opacity: 1, scale: 1 }}
									transition={{
										delay: 0.5 * index,
										duration: 1,
										type: 'spring',
										stiffness: 200,
										damping: 20
									}}
									let:motion
								>
									<li use:motion class="font-bold flex items-center gap-2">
										<iconify-icon
											icon="charm:tick"
											class=" inline text-reddish font-bold"
											width="25"
											height="25"
										/>
										{item}
									</li>
								</Motion>
							{/each}
						</ul>
					{/if}
					Whether you're a first-time homebuyer, an experienced investor, or a landlord, Jirani
					Properties is the perfect partner for all your real estate needs.
					<div class="flex items-center  w-full justify-between pt-6">
						<a
							href={type.href}
							class="bg-transparent uppercase text-xs hover:bg-reddish flex gap-1 lg:gap-3 items-center text-blue-dark font-semibold hover:text-white py-1.5 px-2.5  border  hover:border-transparent rounded"
						>
							{type.name}
							<iconify-icon
								icon="system-uicons:arrow-right"
								class=" inline text-reddish font-bold"
								width="16"
								height="16"
							/>
						</a>
						<span class="flex items-center lg:gap-6 gap-4">
							<img src="/images/home/cert.png" alt="cert" class="w-10 h-10" />
							<span class="flex flex-col">
								<b class="text-blueish">ISO 9001 Cerfified</b>
								<small>Fully Audit Management</small>
							</span>
						</span>
					</div>
				</small>
			</div>
		</div>
	</section>
</IntersectionObserver>

<style>
	.blog__image img {
		opacity: 1;
		height: 120%;
		top: -20%;
	}
</style>
