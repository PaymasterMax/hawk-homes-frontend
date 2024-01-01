<script lang="ts">
	import Icon from '$components/common/icon.svelte';

	const billing = [
		{
			label: 'First Name',
			key: '',
			optional: false
		},
		{
			label: 'Last Name',
			key: '',
			optional: false
		},
		{
			label: 'Company(Optional)',
			key: '',
			optional: true
		},
		{
			label: 'County/Region',
			key: '',
			optional: false
		},
		{
			label: 'Street Address',
			key: '',
			optional: false
		},
		{
			label: 'City/Town',
			key: '',
			optional: false
		},
		{
			label: 'Country(Optional)',
			key: '',
			optional: true
		},
		{
			label: 'PostCode',
			key: '',
			optional: false
		},
		{
			label: 'Email Address',
			key: '',
			optional: false
		}
	];
</script>

<main class=" bg-bg">
	<div class="py-8 bg-white">
		<h1 class="font-extrabold lg:text-2xl text-xl  w-4/6 mx-auto">Payment</h1>
	</div>
	<section class="lg:w-4/6 w-11/12 mx-auto py-8">
		<div class="bg-white p-5 my-8">
			<h1 class="font-bold text-xl mb-4">Billing Details</h1>
			<div class="grid lg:grid-cols-3 grid-cols-2 gap-4">
				{#each billing as data}
					<div class="form-control w-full  ">
						<label class="label" for="">
							<span class="label-text"
								>{data?.label}{#if !data.optional}
									<!-- content here --><abbr title="required" class="text-reddish"
										>*</abbr
									>
								{/if}</span
							>
						</label>

						<input type="text" class="formInput placeholder:text-light-purple w-full" />
					</div>
				{/each}
			</div>
		</div>
	</section>
	<section class="lg:w-4/6 w-11/12 mx-auto pb-8">
		<div class="bg-white p-5 my-8">
			<h1 class="font-bold text-xl mb-4">Your Order</h1>
			<div class="overflow-x-auto">
				<table class="table">
					<!-- head -->
					<thead>
						<tr>
							<th>Product</th>
							<th>Sub Total</th>
						</tr>
					</thead>
					<tbody>
						<!-- row 1 -->
						<tr>
							<td>Featured Max</td>
							<td>Kes 3500.00</td>
						</tr>
						<tr>
							<td>Total</td>
							<td>Kes 3500.00</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="flex flex-col gap-4 w-max">
				<div class="form-control">
					<label class="label cursor-pointer items-center justify-start gap-2">
						<input
							type="radio"
							name="radio-10"
							class="radio checked:bg-red-500"
							checked
						/>
						<span class="label-text">Bank Transfer</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer  items-center justify-start  gap-2">
						<input type="radio" name="radio-10" class="radio checked:bg-blue-500" />
						<span class="label-text">Paypal</span>
					</label>
				</div>
			</div>
		</div>
	</section>
	<div class="w-4/6 mx-auto flex justify-end mb-5">
		<a href="/checkout/payment/receipt">
			<button class="bg-reddish btn text-white"
				>Place Order <Icon
					name="system-uicons:arrow-right"
					color="text-white"
					size={24}
				/></button
			>
		</a>
	</div>
</main>
