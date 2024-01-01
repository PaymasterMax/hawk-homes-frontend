<script>
	import BlogCardFtr from '$components/cards/blogCardFtr.svelte';
	import PostCard from '$components/cards/postCard.svelte';
	import BlogPane from '$components/others/blogPane.svelte';
	import Stats from '$components/others/stats.svelte';
	import Team from '$components/others/team.svelte';
	import About from '$home/about.svelte';
	import HomeTestmony from '$home/homeTestmony.svelte';
	import Letter from '$components/common/letter.svelte';
	import Services from '$home/services.svelte';
</script>

<svelte:head>
	<title>About Us|Jirani</title>
</svelte:head>
<main class="bg-white">
	<section
		class="w-full grid place-items-center relative h-52 bg-dark"
		style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8QhV-fIoU51OH55BmDvWEGgWMyjJZaVy3w&usqp=CAU);"
	>
		<div class="absolute inset-0 bg-black/25 z-10" />
		<div class=" breadcrumbs w-max mx-auto py-4 text-white relative  z-20">
			<ul>
				<li><a href="/">Home</a></li>
				<li class="text-white">About</li>
			</ul>
		</div>
	</section>
	<About type={{ name: 'Explore Listing', href: '/listings' }} />
	<Stats />
	<Services />
	<Team />
	<HomeTestmony />

	<Letter />
</main>
