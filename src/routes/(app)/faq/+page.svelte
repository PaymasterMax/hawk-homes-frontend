<script>
	import BlogCardFtr from '$components/cards/blogCardFtr.svelte';
	import PostCard from '$components/cards/postCard.svelte';
	import Icon from '$components/common/icon.svelte';
	import BlogPane from '$components/others/blogPane.svelte';

	import Letter from '$components/common/letter.svelte';
	import SendEmail from '$components/forms/sendEmail.svelte';
</script>

<svelte:head>
	<title>FAQ</title>
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

				<li class="text-white">FAQ</li>
			</ul>
		</div>
	</section>

	<section class="flex lg:flex-row flex-col gap-4 lg:w-5/6 w-11/12 mx-auto py-14">
		<div class="flex flex-col gap-6 py-14 lg:w-4/6 w-11/12 mx-auto">
			{#each { length: 8 } as item}
				<div class="collapse collapse-arrow  bg-base-200 rounded-none">
					<input type="radio" name="my-accordion-1" checked />
					<div
						class="collapse-title  font-medium bg-white text-black border text-sm flex gap-4 items-center justify-between"
					>
						Click to open this one and close others
					</div>
					<div class="collapse-content">
						<p>hello</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="w-2/6 lg:block hidden">
			<SendEmail />
		</div>
		<div class="form-control gap-4 lg:hidden block">
			<h1>Needs Help?Contact Our Customer Service</h1>
			<a href="/contact">
				<button class="btn btn-success btn-sm">Contact</button>
			</a>
		</div>
	</section>
	<Letter />
</main>
