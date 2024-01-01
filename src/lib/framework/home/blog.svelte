<script lang="ts">
	import { Motion } from 'svelte-motion';
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: any;
	let intersecting: any;
</script>

<IntersectionObserver {element} once threshold={0.3} bind:intersecting>
	<section
		bind:this={element}
		class="h-max  flex flex-col py-14 items-center gap-6 overflow-hidden"
	>
		{#if intersecting}
			<!-- content here -->

			<span class="flex items-center lg:self-center self-start pl-5 gap-2">
				<Motion
					initial={{ width: 0 }}
					animate={{ width: 20 }}
					transition={{ duration: 1 }}
					let:motion
				>
					<span use:motion class=" bg-reddish rounded-full h-[1px] block" />
				</Motion>
				<h3 class="text-blueish  uppercase font-opensans text-sm font-semibold">
					read the latest news
				</h3>
			</span>

			<h4
				class="text-blackish lg:block hidden font-oxy font-bold leading-10 text-4xl capitalize"
			>
				Latest From Blog
			</h4>
			<small class="lg:w-2/6 lg:block hidden w-4/6 text-center">
				Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidata proident, sunt in culpa qui officia deserunt mollit anim idet
			</small>

			<section class="  lg:w-5/6 mx-auto flex w-11/12 self-start  relative">
				<div class="w-3/5 lg:flex hidden  bg-hold h-[70vh] relative">
					<img
						src="/images/home/obj-2.png"
						alt="cercornet"
						class="absolute w-16 h-16 top-0 -left-20"
					/>
					<img
						src="https://www.colibrirealestate.com/wp-content/uploads/2016/06/blog_image_50-blog-topics@2x.jpg"
						alt="Placeholder"
						class="aspect"
					/>
				</div>
				<div class="lg:pl-10  flex flex-col gap-6 justify-between">
					<div class=" grid grid-rows-3 h-5/6">
						<Motion
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								delay: 0.5,
								duration: 1
							}}
							let:motion
						>
							<div
								use:motion
								class="border-l-[3px] border-l-reddish border-b border-b-hold pl-5 pb-2 flex flex-col justify-center gap-3 "
							>
								<b class="font-oxy font-bold w-4/6 leading-6"
									>Energize your property search experience with MyHome</b
								>
								<div class="flex gap-4 items-center">
									<div
										class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full "
									>
										<img
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbyKJu4Gm3dj297GVvMXVnEhs1kSH1sCm5Q&usqp=CAU"
											alt="Placeholder"
											class="aspect"
										/>
									</div>
									<small>Milly Sandra</small>
									<span class="flex gap-1 text-sm items-center"
										><iconify-icon
											icon="material-symbols:date-range"
											class=" inline text-reddish  font-bold"
											width="20"
											height="20"
										/> April 19 ,2023</span
									>
								</div>
							</div>
						</Motion>
						<Motion
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								delay: 0.8,
								duration: 1
							}}
							let:motion
						>
							<div
								use:motion
								class=" border-b border-b-hold pl-5 flex flex-col justify-center gap-3 "
							>
								<h1 class="font-oxy w-4/6 leading-6 ">
									Energize your property search experience with MyHome
								</h1>
								<div class="flex gap-4 items-center">
									<iconify-icon
										icon="ph:user-thin"
										class=" inline text-reddish  font-bold"
										width="15"
										height="15"
									/>
									<small>David Beckham</small>
									<span class="flex gap-1 text-sm items-center"
										><iconify-icon
											icon="uit:calender"
											class=" inline text-reddish  font-bold"
											width="20"
											height="20"
										/> April 19 ,2023</span
									>
								</div>
							</div>
						</Motion>
						<Motion
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								delay: 1,
								duration: 1
							}}
							let:motion
						>
							<div
								use:motion
								class=" border-b border-b-hold pl-5 flex flex-col justify-center gap-3"
							>
								<h1 class="font-oxy  w-4/6 leading-6 ">
									Energize your property search experience with MyHome
								</h1>
								<div class="flex gap-4 items-center">
									<iconify-icon
										icon="ph:user-thin"
										class=" inline text-reddish  font-bold"
										width="15"
										height="15"
									/>

									<small>Camila haris</small>
									<span class="flex gap-1 text-sm items-center"
										><iconify-icon
											icon="uit:calender"
											class=" inline text-reddish  font-bold"
											width="20"
											height="20"
										/> April 19 ,2023</span
									>
								</div>
							</div>
						</Motion>
					</div>
					<a
						href="/blog"
						class="text-white w-max flex gap-2 h-10 items-center  bg-blueish  focus:ring-4 focus:outline-none focus:ring-blueish
                 font-oxy transition-all uppercase shadow-lg shadow-blueish ring-blueish/50  font-bold  text-sm 
               px-5 py-2.5 text-center  "
					>
						Visit Blog
						<iconify-icon
							icon="system-uicons:arrow-right"
							class=" inline text-white font-bold"
							width="25"
							height="25"
						/>
					</a>
				</div>
			</section>{/if}
	</section>
</IntersectionObserver>
