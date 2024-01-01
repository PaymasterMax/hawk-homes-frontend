<script lang="ts">
	export let testmony: { comment: string; by: string; service: string };
</script>

<div class="flex items-center gap-2  w-full relative">
	<div class="relative w-16 h-16 overflow-hidden bg-gray-100 rounded-full ">
		<img
			src={'https://static.toiimg.com/thumb/msid-90574393,width-400,resizemode-4/90574393.jpg'}
			alt="Placeholder"
			class="aspect"
		/>
	</div>
	<div class=" flex flex-col h-4/6 gap-1 justify-center">
		<h2 class="font-oxy font-bold capitalize">{testmony.by}</h2>
		<small class="text-sm text-dark">{testmony.service}</small>
		<div class="flex h-10">
			{#each [1, 2, 3, 4, 5, 6] as item}
				<iconify-icon
					icon="mdi:star"
					class=" inline text-yellow-500 font-bold"
					width="15"
					height="15"
				/>
			{/each}
		</div>
	</div>
	<img src="images/home/quotes.png" alt="" srcset="" class="h-8 w-8  absolute right-1 top-1" />
</div>
<p class="text-dark text-sm">
	{testmony.comment}
</p>
<button
	class="bg-blueish/25  text-blueish w-7/12 capitalize hover:bg-reddish flex justify-between  text-sm items-center   font-semibold hover:text-white px-4   rounded"
>
	via facebook

	<div class="h-full w-7 border-l grid place-items-center py-2">
		<iconify-icon
			icon="gg:facebook"
			class=" inline text-blueish/50 font-bold"
			width="18"
			height="18"
		/>
	</div>
</button>
