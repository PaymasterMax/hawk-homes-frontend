<script lang="ts">
	import { enhance } from '$app/forms';
	import LandlordForm from '$components/forms/landlordForm.svelte';
	import type { PageData } from './$types';

	export let form: any;
	export let data: PageData;
	const {
		profile: {
			first_name,
			last_name,
			profile: { email_addr, phone },
			verified
		}
	} = data;

</script>

<!-- incorrect -->
<main class="flex min-h-screen flex-col my-10 overflow-hidden">
	<section class="lg:w-5/6 w-11/12 flex lg:flex-row flex-col mx-auto gap-4">
		<div class="flex flex-col gap-2 items-center">
			<div>
				<div class="avatar online">
					<div class="lg:w-36 w-24 rounded-full">
						<img
							src="https://ui-avatars.com/api/?name={first_name}+{last_name}&background=random"
							alt=""
						/>
					</div>
				</div>
			</div>
			{#if verified}
				<!-- content here --><button class="btn btn-outline btn-accent btn-xs w-max"
					>verified</button
				>
			{/if}
		</div>
		<div class="bg-white p-3 shadow-sm rounded-sm ">
			<div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
				<span class="text-green-500">
					<svg
						class="h-5"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
				</span>
				<span class="tracking-wide">About</span>
			</div>
			<div class="text-gray-700">
				<div class="grid md:grid-cols-2 text-sm">
					<div class="grid grid-cols-2">
						<div class="px-4 py-2 font-semibold">First Name</div>
						<div class="px-4 py-2">{first_name}</div>
					</div>
					<div class="grid grid-cols-2">
						<div class="px-4 py-2 font-semibold">Last Name</div>
						<div class="px-4 py-2">{last_name}</div>
					</div>

					<div class="grid grid-cols-2">
						<div class="px-4 py-2 font-semibold">Contact No.</div>
						<div class="px-4 py-2">{phone}</div>
					</div>

					<div class="grid grid-cols-2">
						<div class="px-4 py-2 font-semibold">Email.</div>
						<div class="px-4 py-2   truncate">
							<span class="text-blue-800 ">{email_addr}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="my-5 flex flex-col gap-4 xl:p-8 lg:p-6 p-4">
		<div class="collapse collapse-arrow rounded-none bg-white shadow-xl">
			<input type="radio" name="my-accordion-2" checked />
			<div class="collapse-title text-xl font-medium">
				<h1 class="font-bold text-xl text-reddish">Upgrade To Landlord</h1>
			</div>
			<div class="collapse-content bg-white">
				<form
					class="flex flex-col lg:w-5/6 w-11/12 mx-auto gap-4"
					action="?/upgradeaccount"
					method="post"
					use:enhance
				>
					<LandlordForm {form} />
					<button type="submit" class="btn bg-blueish btn-ghost text-alice w-max ">
						Upgrade
						<iconify-icon
							icon="uiw:swap-right"
							class=" inline text-white font-bold"
							width="20"
							height="20"
						/>
					</button>
				</form>
			</div>
		</div>
		<div class="collapse collapse-arrow  shadow-xl bg-white rounded-none">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl font-medium">
				<h1 class="font-bold text-reddish text-xl">Update Phone Number</h1>
			</div>
			<div class="collapse-content bg-white">
				<form
					class="flex flex-col lg:w-5/6 w-11/12 mx-auto gap-4"
					action="?/updatephone"
					method="post"
					use:enhance
				>
					<!--  -->
					<div class="form-control w-full max-w-xs">
						<label class="label" for="">
							<span class="label-text  font-semibold">Enter Phone Number</span>
						</label>
						<input
							type="text"
							placeholder="+254..."
							class="input input-bordered w-full max-w-xs"
							name="phone"
							value={form?.data?.phone ?? ''}
						/>{#if form?.errors?.phone}
							<!-- content here --><label for="" class="label">
								<span class="label-text-alt text-error"
									>{form?.errors?.phone[0]}</span
								>
							</label>
						{/if}
					</div>

					<button type="submit" class="btn bg-blueish btn-ghost text-alice w-max ">
						Update Phone Number
						<iconify-icon
							icon="uiw:swap-right"
							class=" inline text-white font-bold "
							width="20"
							height="20"
						/>
					</button>
				</form>
			</div>
		</div>
		<div class="collapse collapse-arrow  shadow-xl bg-white rounded-none">
			<input type="radio" name="my-accordion-2" />
			<div class="collapse-title text-xl  font-medium">
				<h1 class="font-bold text-reddish text-xl">Change Password</h1>
			</div>
			<div class="collapse-content bg-white">
				<form
					class="flex flex-col lg:w-5/6 w-11/12 mx-auto gap-4"
					action="?/changepassword"
					method="post"
					use:enhance
				>
					<!--  -->
					<div class="form-control w-full max-w-xs">
						<label class="label" for="">
							<span class="label-text  font-semibold">Enter Password</span>
						</label>
						<input
							type="password"
							placeholder="Password"
							class="input input-bordered w-full max-w-xs"
							name="password"
						/>{#if form?.errors?.password}
							<!-- content here --><label for="" class="label">
								<span class="label-text-alt text-error"
									>{form?.errors?.password[0]}</span
								>
							</label>
						{/if}
					</div>
					<div class="form-control w-full max-w-xs">
						<label class="label" for="">
							<span class="label-text  font-semibold truncate">Confirm Password</span>
						</label>
						<input
							type="password"
							placeholder="Password"
							class="input input-bordered w-full max-w-xs"
							name="password_confirm"
						/>
						{#if form?.errors?.password_confirm}
							<!-- content here --><label for="" class="label">
								<span class="label-text-alt text-error"
									>{form?.errors?.password_confirm[0]}</span
								>
							</label>
						{/if}
					</div>

					<button type="submit" class="btn bg-blueish btn-ghost text-alice w-max ">
						Change Password
						<iconify-icon
							icon="uiw:swap-right"
							class=" inline text-white font-bold"
							width="20"
							height="20"
						/>
					</button>
				</form>
			</div>
		</div>
	</section>
</main>
