<script lang="ts">
	import Letter from '$components/common/letter.svelte';
	import ListingMap from '$components/listing/listingMap.svelte';
	import { SearchHeader } from '$lib/framework/search';
</script>

<svelte:head>
	<title>Advanced Search</title>
</svelte:head>
<main class=" border-t">
	<div class="text-sm breadcrumbs lg:w-4/5 w-11/12 mx-auto py-4 ">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/search">Search</a></li>
			<li class="text-blueish">Search Results</li>
		</ul>
	</div>
	<SearchHeader />

	<Letter />
</main>
