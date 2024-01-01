<script lang="ts">
	import Icon from '$components/common/icon.svelte';
</script>

<main class=" bg-bg">
	<div class="py-8 bg-white">
		<h1 class="font-extrabold lg:text-2xl text-xl  w-4/6 mx-auto">Payment</h1>
	</div>
	<section class="lg:w-4/6 w-11/12 mx-auto py-14">
		<div class="bg-white p-5 my-8 flex flex-col gap-4 items-center">
			<h1 class="font-bold text-xl mb-4 text-center">
				Thank you for your order <span class="text-reddish">#ds54sd-sd</span>
			</h1>
			<div class="bg-red-400/30 w-full flex items-center py-2 justify-center">
				Package Featured MINI Kes 3500.00
			</div>
			<b>Our Bank Details</b>
			<div class="w-11/12">
				<div class="border p-8 flex flex-col gap-4">
					<div class="flex flex-col gap-2">
						<small>Bank:</small>
						<b>KCB bank</b>
					</div>
					<div class="flex flex-col gap-2">
						<small>Account Number:</small>
						<b>7557575757575575</b>
					</div>
					<div class="flex flex-col gap-2">
						<small>Sort Code:</small>
						<code>7557575757575575</code>
					</div>
					<div class="flex flex-col gap-2">
						<small>IBAN:</small>
						<code>7557575757575575</code>
					</div>
					<div class="flex flex-col gap-2">
						<small>BC:</small>
						<b>SUMERA</b>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="w-4/6 mx-auto flex justify-end mb-5">
		<a href="/">
			<button class="bg-reddish btn text-white"
				>Back to panel <Icon
					name="system-uicons:arrow-right"
					color="text-white"
					size={24}
				/></button
			></a
		>
	</div>
</main>
