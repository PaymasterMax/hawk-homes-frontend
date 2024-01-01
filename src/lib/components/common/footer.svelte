<script lang="ts">
	import Icon from '$components/common/icon.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { Motion } from 'svelte-motion';

	let element: any;
	let intersecting: any;
</script>

<IntersectionObserver {element} once threshold={0.3} bind:intersecting>
	<section
		bind:this={element}
		class="lg:min-h-[70vh] h-max py-10 bg-[#131a4b] z-30  relative overflow-hidden flex text-white items-center"
	>
		{#if intersecting}
			<!-- content here -->

			<div class="lg:w-5/6 w-11/12 mx-auto h-4/6 flex justify-between ">
				<div class="flex flex-col w-2/5 lg:justify-between gap-4">
					<div class="relative flex h-16 lg:w-1/3 ">
						<Motion
							initial={{ y: -50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.8, duration: 1 }}
							let:motion
						>
							<img use:motion src="/images/red.png" alt="logo" srcset="" class="" />
						</Motion>
					</div>
					<p class="text-[#b3b5cc] text-sm lg:block hidden">
						Because we're the best in the business. We have a comprehensive database of
						properties for sale and rent in Kenya, easy-to-use search tools, and a team
						of experienced real estate agents who are here to help you every step of the
						way. We're committed to helping you find your dream home or property,
						whether you're buying, selling, or renting.
					</p>
					<div class="flex items-center gap-4  w-full">
						<b class="capitalize">connect</b>
						<Motion
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, duration: 1 }}
							let:motion
						>
							<div use:motion class="flex gap-4">
								{#each ['mdi:twitter', 'basil:facebook-solid', 'basil:facebook-solid', 'mdi:vimeo', 'ri:linkedin-line'] as item, index}
									<Motion
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.5 * index, duration: 1 }}
										let:motion
									>
										<span
											use:motion
											class="grid place-items-center  bg-blueish h-8 w-8 rounded-full"
										>
											<iconify-icon
												icon={item}
												class=" inline text-white  font-bold"
												width="16"
												height="16"
											/></span
										>
									</Motion>
								{/each}
							</div>
						</Motion>
					</div>
				</div>
				<div class="lg:flex flex-col gap-3 hidden">
					<b class="capitalize">Useful links</b>
					<a href="/faq">
						<span class="text-[#b3b5cc] text-sm items-center flex gap-1"
							><Icon name="clarity:map-marker-line" color="text-warning" />
							{'Faq'}</span
						>
					</a>
					{#each ['Real Estate Services', 'Explore Places', 'Search Properties', 'Why Choose Us', 'Submit a Property', 'Latest News', 'Newest Properties'] as item, index}
						<Motion
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 * index, duration: 1 }}
							let:motion
						>
							<span use:motion class="text-[#b3b5cc] text-sm">{item}</span>
						</Motion>
					{/each}
				</div>
				<div class="bg-blueish px-10 py-2 lg:flex flex-col gap-4 hidden">
					<Motion
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 1 }}
						let:motion
					>
						<big use:motion class="">Contact Us</big>
					</Motion>
					<Motion
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 1 }}
						let:motion
					>
						<small use:motion class="font-oxy font-semibold">Jirani Properties</small>
					</Motion>
					<Motion
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 1 }}
						let:motion
					>
						<div use:motion class="flex items-center gap-2 text-[#b3b5cc]">
							<iconify-icon
								icon="clarity:map-marker-line"
								class=" inline text-white  font-bold"
								width="16"
								height="16"
							/>
							<span class="text-sm"
								>56 Taylor Street, Mount Vernon,<br /> New York 10550 - USA</span
							>
						</div>
					</Motion>
					<Motion
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 1 }}
						let:motion
					>
						<div use:motion class="flex items-center gap-2 text-[#b3b5cc]">
							<iconify-icon
								icon="mdi-light:email-open"
								class=" inline text-white  font-bold"
								width="16"
								height="16"
							/>
							<span class="text-sm">support@estinatheme.com</span>
						</div>
					</Motion>
					<Motion
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 1 }}
						let:motion
					>
						<div use:motion class="flex items-center gap-2 text-[#b3b5cc]">
							<iconify-icon
								icon="iconamoon:clock-thin"
								class=" inline text-white  font-bold"
								width="16"
								height="16"
							/>
							<span class="text-sm">Mon to Fri - 9:00am to 6:00 pm</span>
						</div>
					</Motion>
					<Motion
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 1 }}
						let:motion
					>
						<div
							use:motion
							class="bg-black/25 w-full h-16 p-2 flex items-center gap-2 justify-center"
						>
							<iconify-icon
								icon="ph:phone-call-thin"
								class=" inline text-white"
								width="40"
								height="40"
							/>
							<div class=" flex flex-col ">
								<small
									class=" flex items-center gap-1 font-opensans text-[#b3b5cc]  font-semibold text-sm capitalize"
									>Need Help?
									<iconify-icon
										icon="icons8:right-round"
										class=" inline text-reddish"
										width="14"
										height="14"
									/>
								</small>
								<span class="text-white font-opensans  font-bold"
									>+(1) 123 546 9689</span
								>
							</div>
						</div>
					</Motion>
				</div>
			</div>
			<div
				class="bg-[#0e143b] w-full lg:py-5 py-2 flex items-center justify-center absolute bottom-0 z-10"
			>
				<span class="text-sm text-[#b3b5cc] capitalize"
					>&copy;2023 Jirani Properties.All Rights Reserved.</span
				>
			</div>
			<Motion
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.7, duration: 1 }}
				let:motion
			>
				<img
					use:motion
					src="/images/home/footer-obj.png"
					alt=""
					srcset=""
					class="absolute -bottom-2 h-64 "
				/>
			</Motion>
		{/if}
	</section>
</IntersectionObserver>
