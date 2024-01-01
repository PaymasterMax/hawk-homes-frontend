<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import Letter from '$components/common/letter.svelte';

	let activeTab: number = 0;
	const handleTab = (tabValue: number) => {
		activeTab = tabValue;
	};

	let element: any;
	let intersecting: any;
	// const endPoint = `{
	//     property(id: "${data.id}"){
	//        houses{
	//         ${houseQuery}
	//        }

	// }`;

	// let houses = Utility.queryGaphql(fetch, endPoint);
</script>

<svelte:head>
	<title>Community|Jirani</title>
</svelte:head>
<IntersectionObserver once {element} threshold={0.2} bind:intersecting>
	<section
		bind:this={element}
		class="min-h-screen bg-bg flex flex-col py-14 items-center gap-6 overflow-hidden"
	>
		<h1 class="font-bold text-2xl">Community Listings</h1>
		<div class="tabs tabs-boxed py-8">
			{#each ['homes', 'apartments', 'Offices'] as item, i}
				{@const active = activeTab === i}
				<button
					class:active
					on:click={() => {
						handleTab(i);
					}}
					class="tab  lg:tab-lg tab-md capitalize font-bold">{item}</button
				>
			{/each}
		</div>

		<!-- content here -->
		{#if intersecting}
			<section class="py-8 grid lg:grid-cols-3 grid-cols-1 lg:w-5/6 w-11/12 gap-x-4 gap-y-6">
				<!-- <AwaitData promise={houses} let:prop={resolve}>
					<ListHouses
						resolve={resolve.data.property?.houses ?? []}
						filter={HouseStatus.all}
					/>
				</AwaitData> -->
			</section>
		{/if}
	</section>
</IntersectionObserver>
<Letter />

<style>
	.active {
		@apply tab-active;
	}
</style>
