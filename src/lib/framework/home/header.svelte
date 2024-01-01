<script lang="ts">
	import AwaitData from '$components/common/awaitData.svelte';

	import { nairobiConstituencies } from '$helpers';
	import { HouseStatus } from '$interface/house';

	import { Utility } from '$utility';
	import { Motion } from 'svelte-motion';

	let activeTab: number = 0;
	const handleTab = (tabValue: number, filter: HouseStatus) => {
		activeTab = tabValue;
		payload['filter'] = filter;
	};

	let payload = {
		type: 'default',
		loc: 'default',
		cost: 3500,
		filter: HouseStatus.all
	};
	const propQuery = `{
propertyTypes{
  id,name
}

}`;
	const propTypes = Utility.queryGaphql(fetch, propQuery);
</script>

<section
	class="min-h-screen w-full grid lg:grid-cols-2 relative  py-14 "
	style="overflow-y: visible;"
>
	<div class="  w-full relative">
		<Motion
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.8, duration: 1 }}
			let:motion
		>
			<div use:motion class="lg:w-5/6 w-full mx-auto  block h-full  relative">
				<img
					src="/images/home/triangle.png"
					alt=""
					srcset=""
					class="absolute top-1/3 left-2"
				/>
				<img
					src="/images/home/triangles.png"
					alt=""
					srcset=""
					class="absolute right-1 bottom-4"
				/>
				<img
					src="/images/home/dots-2.png"
					alt=""
					srcset=""
					class="absolute top-3 right-3"
				/>
				<img
					src="/images/home/dots.png"
					alt=""
					srcset=""
					class="absolute left-2 bottom-1"
				/>
			</div>
		</Motion>
		<div
			class="absolute inset-0 flex flex-col lg:gap-6 gap-10 justify-center lg:w-5/6 w-11/12 lg:ml-32 mx-auto  "
		>
			<span class="flex flex-col gap-6">
				<span class="lg:text-5xl text-4xl font-oxy flex flex-col font-bold ">
					<Motion
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 1,
							type: 'spring',
							stiffness: 400,
							damping: 20,
							delay: 0.8
						}}
						let:motion
					>
						<span use:motion>Find </span>
					</Motion>

					<Motion
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 1,
							type: 'spring',
							stiffness: 400,
							damping: 20,
							delay: 0.5
						}}
						let:motion
					>
						<span use:motion class="relative w-max "
							>your dream home or
							<div
								class=" rounded-l-full  h-0.5 bg-blueish absolute right-0 left-4 -bottom-0 "
							/>
						</span>
					</Motion>
					<Motion
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 1,
							type: 'spring',
							stiffness: 400,
							damping: 20,
							delay: 0.2
						}}
						let:motion
					>
						<span use:motion>property in Kenya with ease!</span>
					</Motion>
				</span>
				<Motion
					initial={{ x: -20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.8, duration: 1 }}
					let:motion
				>
					<p use:motion class="lg:text-xl font-oxy">
						Rent the best properties in your city, Kenya - quick and easy!
					</p>
				</Motion>
			</span>

			<div class="flex flex-col gap-6">
				<div class="grid gap-2 grid-cols-3 2xl:grid-cols-6 xl:lg:grid-cols-5">
					{#each Object.entries(HouseStatus) as [k, v], index}
						<Motion
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								duration: 1,
								type: 'spring',
								stiffness: 400,
								damping: 20,
								delay: 0.2 * index
							}}
							let:motion
						>
							<button
								use:motion
								class="py-2 px-3 capitalize cursor-pointer grid place-items-center rounded font-opensans font-bold {index ===
								activeTab
									? 'bg-reddish text-white'
									: 'bg-[#f4f4f4] text-[#888888]'}
								"
								on:click={() => {
									handleTab(index, v);
								}}
							>
								{v}
							</button>
						</Motion>
					{/each}
				</div>
				<Motion
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 1,
						type: 'spring',
						stiffness: 400,
						damping: 20,
						delay: 1
					}}
					let:motion
				>
					<div
						use:motion
						class="bg-[#f7f7f7] w-full py-6 flex lg:flex-row flex-col gap-4 lg:items-center px-4 rounded-lg shadow-xl "
					>
						<div
							class="grid 2xl:grid-cols-3 xl:lg:grid-cols-2 grid-cols-2  lg:gap-4 gap-1 lg:w-5/6 w-full"
						>
							{#each [{ prop: 'type', desc: 'Select Type', type: 2, options: [] }, { prop: 'Max price', desc: 'ksh 6500', type: 0, options: '' }, { prop: 'where', desc: 'Choose Location', type: 1, options: nairobiConstituencies }] as item}
								<div
									class="flex flex-col gap-4   {item.type === 1
										? 'col-span-2 2xl:col-span-1'
										: ''}"
								>
									<b class="capitalize text-sm">{item.prop}</b>
									{#if item.type === 1}
										<!-- content here -->
										<select
											id="hs-select-label"
											class=" select select-bordered w-full"
											bind:value={payload['loc']}
										>
											<option value={'default'} disabled>{item.desc}</option>
											{#each item.options as x}
												<!-- content here --><option value={x}>{x}</option>
											{/each}
										</select>
									{:else if item.type === 2}
										<select
											id="hs-select-label"
											class=" select select-bordered"
											bind:value={payload['type']}
											><option value={'default'} disabled>{item.desc}</option>
											<AwaitData promise={propTypes} let:prop={resolve}>
												{#each resolve.data.propertyTypes as { id, name }}
													<option value={id}>{name}</option>
												{/each}
											</AwaitData>
										</select>
									{:else}
										<input
											type="number"
											class="formInput "
											placeholder="Enter Cost"
											min={3500}
											bind:value={payload['cost']}
										/>
									{/if}
								</div>
							{/each}
						</div>
						<div class="flex items-end justify-end h-full w-1/6">
							<a
								href="/search?type={payload.type !== 'default'
									? payload.type
									: ''}&loc={payload.loc !== 'default'
									? payload.loc
									: ''}&cost={payload.cost}&filter={payload.filter}"
								class="grid place-items-center cursor-pointer bg-blueish py-2.5 px-3.5 rounded-lg"
							>
								<iconify-icon
									icon="cil:search"
									class=" inline text-white font-bold"
									width="25"
									height="25"
								/>
							</a>
						</div>
					</div>
				</Motion>
			</div>
		</div>
	</div>
	<div class="lg:flex hidden justify-center items-center">
		<img src="/images/home/home2.png" alt="Placeholder" class="object-cover" />
	</div>

	<Motion
		initial={{ y: -20, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		transition={{ delay: 1, duration: 1 }}
		let:motion
	>
		<img
			use:motion
			src="/images/home/obj-3.png"
			alt="tri"
			class="absolute right-4  -bottom-16  h-20 w-20"
		/>
	</Motion>
</section>
