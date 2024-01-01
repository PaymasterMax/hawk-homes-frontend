<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="h-screen grid place-items-center w-full ">
	<div class="flex lg:w-4/6 mx-auto flex-col gap-4 items-center relative">
		<img src="/images/home/404.png" alt="" class="relative z-20" />
		<h1 class="text-6xl relative z-20 font-extrabold text-teal-800">{$page.status}</h1>
		<p>oops! <b class="text-reddish">{$page.error?.message}</b></p>
		<a
			href="/contact"
			class="text-white  flex gap-2  items-center rounded  bg-reddish  focus:ring-4 focus:outline-none focus:ring-reddish
     dark:focus:ring-reddish font-oxy w-max  uppercase shadow-lg shadow-reddish ring-reddish/50  font-bold  lg:text-sm text-[11px] 
    lg:px-5 px-2 lg:py-2.5 py-1.5 text-center  "
		>
			Contact The Admin
			<iconify-icon
				icon="uiw:swap-right"
				class=" inline text-white font-bold"
				width="20"
				height="20"
			/>
		</a>
		<img src="/images/home/triangle.png" alt="" srcset="" class="absolute top-1/3 left-2" />
		<img src="/images/home/triangles.png" alt="" srcset="" class="absolute right-1 bottom-4" />
		<img src="/images/home/dots-2.png" alt="" srcset="" class="absolute top-3 right-3" />
		<img src="/images/home/dots.png" alt="" srcset="" class="absolute left-2 bottom-1" />
	</div>
</main>
