<script lang="ts">
	export let service: {
		icon: string;

		name: string;
		desc: string;
	};
</script>

<div class="h-full relative grid place-items-center  w-4/6">
	<img
		src={`/images/home/${service.icon}.png`}
		alt=""
		srcset=""
		class="h-40 w-40 relative z-20"
	/>
	<img
		src="/images/home/obj.png"
		alt=""
		srcset=""
		class="absolute -left-8 h-32 w-32 top-16 z-10"
	/>
</div>
<div class="w-4/6 mt-5">
	<h2 class="font-oxy font-bold text-xl text-center capitalize">{service.name}</h2>
	<small class="text-sm text-dark mt-1 block text-center w-full"
		>Your Best Realtor In Africa</small
	>
</div>

<small class="w-4/6 text-center">
	{service.desc}
</small>
<button
	class="bg-transparent uppercase hover:bg-reddish flex gap-4 mt-2 text-reddish  text-sm items-center justify-center  font-semibold hover:text-white py-2 px-4   hover:border-transparent rounded"
>
	Read More
</button>
