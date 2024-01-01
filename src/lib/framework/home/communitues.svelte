<script lang="ts">
	import Comcard from '$components/cards/comcard.svelte';
	import { Motion } from 'svelte-motion';
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: any;
	let intersecting: any;
</script>

<IntersectionObserver {element} once threshold={0.3} bind:intersecting>
	<section bind:this={element} class="bg-bg py-14 min-h-screen overflow-hidden">
		{#if intersecting}
			<div class="lg:w-5/6 w-11/12 mx-auto">
				<div class="flex justify-between">
					<div class="flex flex-col gap-4">
						<span class="flex items-center gap-2"
							><Motion
								initial={{ width: 0 }}
								animate={{ width: 20 }}
								transition={{ duration: 1 }}
								let:motion
							>
								<span use:motion class=" bg-reddish rounded-full h-[1px] block" />
							</Motion>
							<h3 class="text-blueish uppercase font-opensans text-sm font-semibold">
								See whats the featured
							</h3>
						</span>
						<h4 class="text-blackish font-oxy font-bold leading-10 text-4xl">
							Featured Communities
						</h4>
					</div>
					<a href="/community">
						<button
							class="bg-transparent uppercase self-center hover:bg-reddish flex gap-4 mt-10 text-dark  text-sm items-center justify-center  font-semibold hover:text-white py-2 px-4 border border-dark  hover:border-transparent rounded"
						>
							View All
							<iconify-icon
								icon="system-uicons:arrow-right"
								class=" inline text-reddish font-bold"
								width="16"
								height="16"
							/>
						</button></a
					>
				</div>
				<div class="grid lg:grid-cols-3 mt-10 gap-4">
					{#each [400, 320, 400, 420, 500, 420] as item, index}
						<Motion
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								delay: 0.5 * index,
								duration: 1
							}}
							let:motion
						>
							<a href="/community/queens">
								<div
									use:motion
									class={`bg-gradient-to-b from-hold to-blackish mb-2 relative h-96`}
								>
									<Comcard />
								</div></a
							>
						</Motion>
					{/each}
				</div>
			</div>
		{/if}
	</section>
</IntersectionObserver>
