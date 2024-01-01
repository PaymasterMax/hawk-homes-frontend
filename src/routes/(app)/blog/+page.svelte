<script>
	import BlogCardFtr from '$components/cards/blogCardFtr.svelte';
	import PostCard from '$components/cards/postCard.svelte';
	import BlogPane from '$components/others/blogPane.svelte';
	import Letter from '$components/common/letter.svelte';
</script>

<svelte:head>
	<title>Blog</title>
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

				<li class="text-white">Blog</li>
			</ul>
		</div>
	</section>
	<div class="carousel w-11/12 mx-auto lg:hidden flex my-10 border-b pb-10">
		{#each new Array(3) as item, index}
			<!-- content here -->
			<div id={`slide${index}`} class="carousel-item relative w-full">
				<div id="item1" class="carousel-item h-[600px] w-10 mr-4">
					<BlogCardFtr />
				</div>
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href={`#slide${index - 1}`} class="btn btn-circle">❮</a>
					<a href={`#slide${index + 1}`} class="btn btn-circle">❯</a>
				</div>
			</div>
		{/each}
	</div>

	<section class=" bg-alice lg:flex hidden h-screen w-full py-5">
		<div class="w-4/5 mx-auto grid grid-cols-3 gap-4 py-10 h-full ">
			{#each new Array(3) as item}
				<BlogCardFtr />
			{/each}
		</div>
	</section>
	<section class="   mx-auto flex lg:w-4/5 w-11/12 py-14 lg:flex-row flex-col gap-6">
		<div class="lg:w-4/6 w-full ">
			{#each new Array(6) as item}
				<PostCard />
			{/each}
		</div>
		<BlogPane />
	</section>
	<Letter />
</main>
