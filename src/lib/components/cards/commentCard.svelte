<script>
	import Icon from '$components/common/icon.svelte';
</script>

<div class="relative grid grid-cols-1  gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
	<button class="btn btn-outline btn-sm absolute right-3 top-2"
		><Icon name="bi:reply-fill" color="text-reddish" /> Reply</button
	>
	<div class="relative flex gap-4">
		<img
			src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
			class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
			alt=""
			loading="lazy"
		/>
		<div class="flex flex-col w-full">
			<div class="flex flex-row justify-between">
				<p class="relative text-xl whitespace-nowrap truncate overflow-hidden">The Joker</p>
				<a class="text-gray-500 text-xl" href="/"><i class="fa-solid fa-trash" /></a>
			</div>
			<p class="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
		</div>
	</div>
	<p class="-mt-4 text-gray-500">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Maxime quisquam vero adipisci
		beatae voluptas dolor ame.
	</p>
</div>
