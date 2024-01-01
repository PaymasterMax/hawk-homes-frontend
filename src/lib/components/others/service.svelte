<script lang="ts">
	import { about } from '$helpers';
	import { Motion } from 'svelte-motion';
	import IntersectionObserver from 'svelte-intersection-observer';
	export let type: { name: string; href: string };
	export let index: number;
	const turn = index % 2;

	let element: any;
	let intersecting: any;
</script>

<IntersectionObserver once {element} threshold={0.2} bind:intersecting>
	<section class="{turn ? 'bg-bg' : ''} w-full">
		<section bind:this={element} class=" h-max flex flex-col overflow-hidden " id="about">
			<div class="lg:w-4/5 w-11/12 mx-auto h-full py-20 grid lg:grid-cols-2 gap-6 relative">
				<div class="pr-8 lg:flex justify-end relative  hidden {turn ? 'order-last' : ''} ">
					<div class="w-full bg-hold h-full">
						<img
							src="https://i.pinimg.com/564x/91/4c/d4/914cd4e277f8e6ea6db8db0423575b34.jpg"
							alt="Placeholder"
							class="aspect"
						/>
					</div>
				</div>

				<div class=" flex flex-col gap-4">
					<span class="flex items-center gap-2"
						>{#if intersecting}
							<Motion
								initial={{ width: 0 }}
								animate={{ width: 20 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								let:motion
							>
								<span
									use:motion
									class="w-5 bg-reddish rounded-full h-[1px] block"
								/>
							</Motion>
						{/if}
						<h3 class="text-blueish uppercase font-opensans text-sm font-semibold">
							Service Known
						</h3>
					</span>
					<h4 class="text-blackish font-oxy font-extrabold  text-2xl">
						Professional Realestate Partner with Best Listings
					</h4>
					<small>
						Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
						occaecat cupidata proident, sunt in culpa qui officia deserunt mollit anim
						idet laborum. Sed ut perspiciatis
					</small>
					{#if intersecting}
						<ul class="flex flex-col ">
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
					<div class="flex items-center  w-full justify-between pt-6">
						<a
							href={type.href}
							class="{turn
								? 'bg-reddish hover:bg-blueish'
								: 'bg-blueish hover:bg-reddish'} uppercase text-white text-xs  flex gap-1 lg:gap-3 items-center text-blue-dark font-semibold hover:text-white py-1.5 px-2.5  border  hover:border-transparent rounded"
						>
							{type.name}
							<iconify-icon
								icon="system-uicons:arrow-right"
								class=" inline text-white font-bold"
								width="16"
								height="16"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	</section>
</IntersectionObserver>
