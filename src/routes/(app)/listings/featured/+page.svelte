<script lang="ts">
	import { Motion } from 'svelte-motion';
	import IntersectionObserver from 'svelte-intersection-observer';

	import { Utility } from '$utility';

	import Letter from '$components/common/letter.svelte';
	import { fetchHouses } from '$helpers';
	import Icon from '$components/common/icon.svelte';
	import ListHouses from '$components/others/listHouses.svelte';

	import type { commonProp } from '$interface/api';
	import AwaitData from '$components/common/awaitData.svelte';
	import { type HouseFetch, HouseStatus } from '$interface/house';

	let activeTab: number = 0;
	const handleTab = (tabValue: number) => {
		activeTab = tabValue;
	};
	let filter = '';
	const getFilteredHouses = (arr: HouseFetch[], id: string) => {
		if (!id) {
			// No filter selected, return all houses
			return arr;
		}
		return arr.filter((x) => x.property.type.id === id);
	};
	let element: any;

	let intersecting: any;
	const PropertyTypes = `
        {
			propertyTypes {
            id
            name
          }
        }
        `;
	let types = Utility.queryGaphql<{
		data: {
			PropertyTypes: commonProp[];
		};
	}>(fetch, PropertyTypes);
	let houses = fetchHouses();
</script>

<svelte:head>
	<title>Featured|Jirani</title>
</svelte:head>
<section
	class="w-full grid place-items-center relative h-52 bg-dark"
	style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8QhV-fIoU51OH55BmDvWEGgWMyjJZaVy3w&usqp=CAU);"
>
	<div class="absolute inset-0 bg-black/25 z-10" />
	<div class=" breadcrumbs w-max mx-auto py-4 text-white relative  z-20">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/">Listings</a></li>

			<li class="text-white">Featured</li>
		</ul>
	</div>
</section>
<IntersectionObserver once {element} threshold={0.2} bind:intersecting>
	<section
		bind:this={element}
		class="min-h-screen bg-bg flex flex-col py-14 items-center gap-6 overflow-hidden"
	>
		<div class="flex lg:justify-between lg:flex-row flex-col items-center w-5/6 mx-auto">
			<div class="tabs tabs-boxed">
				<AwaitData promise={types} let:prop={resolve}>
					{#each [{ id: '', name: 'all' }, ...resolve.data.propertyTypes] as { id, name }, i}
						{@const active = activeTab === i}
						<button
							class:active
							on:click={() => {
								handleTab(i);
								filter = id;
							}}
							class="tab  lg:tab-lg tab-md capitalize font-bold">{name}</button
						>
					{/each}
				</AwaitData>
			</div>
		</div>

		<!-- content here -->
		{#if intersecting}
			<section class="py-8 grid lg:grid-cols-3 grid-cols-1 lg:w-5/6 w-11/12 gap-x-4 gap-y-6">
				<AwaitData promise={houses} let:prop={resolve}>
					<ListHouses
						resolve={getFilteredHouses(resolve.data.houses ?? [], filter)}
						bind:filter={HouseStatus.all}
					/>
				</AwaitData>
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
