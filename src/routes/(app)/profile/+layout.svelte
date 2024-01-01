<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$components/common/icon.svelte';
	import Profilenav from '$components/common/profilenav.svelte';
</script>

<div class="w-full py-5">
	<div class="lg:w-5/6 w-11/12 mx-auto flex items-center justify-between">
		<h1 class="font-extrabold lg:text-3xl text-xl capitalize">
			{$page.url.pathname.split('/').pop()}
		</h1>
		<div class="flex gap-4">
			<a href="/checkout/packages">
				<buttonz class="btn hover:bg-reddish lg:btn-md btn-sm  btn-outline"
					>Buy Package <Icon
						name="system-uicons:arrow-right"
						color="text-reddish"
						size={24}
					/></buttonz
				></a
			>
		</div>
	</div>
</div>
<Profilenav />
<main class="lg:w-5/6 w-11/12 mx-auto py-14">
	<slot />
</main>
