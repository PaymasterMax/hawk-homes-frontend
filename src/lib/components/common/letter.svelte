<script lang="ts">
	import { Motion } from 'svelte-motion';
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: any;
	let intersecting: any;
</script>

<IntersectionObserver {element} once threshold={0.3} bind:intersecting>
	<section
		bind:this={element}
		class="bg-[#f13a5c] h-max py-20  flex items-center relative overflow-hidden "
	>
		{#if intersecting}
			<!-- content here -->

			<img src="/images/home/dots-5.png" alt="" srcset="" class=" absolute left-20" />
			<img src="/images/home/dots-5.png" alt="" srcset="" class=" absolute right-20" />
			<div class="lg:w-4/6 w-11/12 flex mx-auto items-center justify-between">
				<Motion
					initial={{ x: -20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						delay: 0.5,
						duration: 1
					}}
					let:motion
				>
					<img
						use:motion
						src="/images/home/left.png"
						alt=""
						srcset=""
						class="lg:h-20 h-14 lg:self-center self-end "
					/>
				</Motion>

				<div class="flex  w-5/6  justify-center items-center gap-4 lg:flex-row flex-col ">
					<span
						class="lg:leading-9 leading-6 capitalize font-oxy font-bold lg:text-3xl text-base text-white"
						>Sign Up for updates,
						<br />
						Get subscribed today!
					</span>
					<div class="flex items-center flex-row gap-1">
						<input
							type="text"
							class="  w-auto lg:p-4 p-3 text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50  focus:ring-blue-500 focus:border-blue-500 "
							placeholder="Enter Your Email ..."
						/>
						<div class="grid place-items-center lg:p-4 p-3 cursor-pointer border">
							<iconify-icon
								icon="mdi-light:email"
								class=" inline text-white font-bold"
								width="16"
								height="16"
							/>
						</div>
					</div>
				</div>
				<Motion
					initial={{ x: 20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						delay: 0.5,
						duration: 1
					}}
					let:motion
				>
					<img
						use:motion
						src="/images/home/right.png"
						alt=""
						srcset=""
						class="lg:h-20 h-14 lg:self-center self-end"
					/>
				</Motion>
			</div>{/if}
	</section>
</IntersectionObserver>
