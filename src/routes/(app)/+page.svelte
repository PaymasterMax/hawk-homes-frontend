<script lang="ts">
	import {
		HomeCom,
		HomeFeature,
		HomeHeader,
		HomeService,
		HomeSold,
		HomeMony,
		HomeBlog,
		HomeLetter
	} from '$home';
</script>

<svelte:head>
	<title>Home | Jirani</title>
</svelte:head>
<main class="overflow-visible main">
	<HomeHeader />

	<HomeFeature />
	<HomeService />
	<HomeCom />
	<HomeSold title={'recently sold listings listed'} />
	<HomeMony />
	<HomeBlog />
	<HomeLetter />
</main>
