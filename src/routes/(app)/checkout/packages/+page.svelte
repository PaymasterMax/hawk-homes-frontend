<script lang="ts">
	import PackageCard from '$components/cards/packageCard.svelte';
</script>

<main class=" bg-bg">
	<div class="py-8 bg-white">
		<h1 class="font-extrabold lg:text-2xl text-xl  w-4/6 mx-auto">Choose a Package</h1>
	</div>
	<section class="lg:w-5/6 w-11/12 mx-auto">
		<div class="flex items-center justify-center w-full py-8">
			<div class="flex gap-4 w-max items-center font-bold">
				<label class="cursor-pointer label" for="pac">
					<span class="label-text">My Packages</span>
				</label>

				<input type="checkbox" name="pac" class="toggle toggle-secondary" checked />
				<label class="cursor-pointer label" for="pac">
					<span class="label-text">Buy New</span>
				</label>
			</div>
		</div>
		<section class="xl:w-4/6 lg:w-5/6 w-11/12 mx-auto">
			<div class="flex gap-4 flex-col">
				{#each { length: 4 } as item}
					<PackageCard />
				{/each}
			</div>
			<div class="w-full flex justify-end my-5">
				<a href="/checkout/payment">
					<button class="btn bg-reddish text-white">Choose Package</button></a
				>
			</div>
		</section>
	</section>
</main>
