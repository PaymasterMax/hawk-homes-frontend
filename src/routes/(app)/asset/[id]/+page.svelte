<script lang="ts">
	import AssetDesc from '$components/others/assetDesc.svelte';
	import AssetGallery from '$components/others/assetGallery.svelte';
	import AssetMobileView from '$components/others/assetMobileView.svelte';
	import Letter from '$components/common/letter.svelte';
	import Sold from '$home/sold.svelte';

	import MediaQuery from '$utility/mediaQuery.svelte';
	export let data: import('./$types').PageData;
	const { h } = data;
	let house = h.data.house;
</script>

<svelte:head>
	<title>Listing</title>
</svelte:head>
<main class="">
	<MediaQuery query="(min-width: 769px)" let:matches>
		{#if matches}
			<div class="text-sm breadcrumbs w-4/5 mx-auto py-4 ">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/search">Search</a></li>
					<li><a href="/search">Real Estate</a></li>
					<li class="text-blueish">{house.property.name}</li>
				</ul>
			</div>
			<!-- <div class="parent">
				<div class="child1" />
				<div class="child1" />
			</div> -->
			<section class="lg:w-4/5 overflow-hidden mx-auto mb-14 flex flex-col gap-6">
				<AssetGallery photos={house.photos} />
				<AssetDesc {house} />
			</section>
			<Sold title={'Related Property Listings'} />
			<Letter />
		{/if}
	</MediaQuery>
	<MediaQuery query="(min-width: 321px) and (max-width: 768px)" let:matches>
		{#if matches}
			<AssetMobileView {house} />
		{/if}
	</MediaQuery>
	<MediaQuery query="(max-width: 320px)" let:matches>
		{#if matches}
			<AssetMobileView {house} />
		{/if}
	</MediaQuery>
</main>
