<script lang="ts">
	import { enhance } from '$app/forms';
	import { error } from '@sveltejs/kit';
	import LandlordForm from './landlordForm.svelte';

	let landlord: boolean = false;
	export let form: any;
</script>

<form class="flex flex-col gap-4" action="?/register" method="post" use:enhance>
	<div class="form-control w-full max-w-xs">
		<label class="label" for="">
			<span class="label-text font-semibold">Account Email</span>
		</label>
		<input
			type="text"
			placeholder="Email"
			class="input input-bordered w-full max-w-xs"
			name="email_addr"
			value={form?.data?.email_addr ?? ''}
		/>
		{#if form?.errors?.email_addr}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{form?.errors?.email_addr[0]}</span>
			</label>
		{/if}
	</div>
	<div class="form-control w-full max-w-xs">
		<label class="label" for="">
			<span class="label-text font-semibold">First Name</span>
		</label>
		<input
			type="text"
			placeholder="first name"
			class="input input-bordered w-full max-w-xs"
			name="first_name"
			value={form?.data?.first_name ?? ''}
		/>
		{#if form?.errors?.first_name}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{form?.errors?.first_name[0]}</span>
			</label>
		{/if}
	</div>
	<div class="form-control w-full max-w-xs">
		<label class="label" for="">
			<span class="label-text font-semibold">Last Name</span>
		</label>
		<input
			type="text"
			placeholder="last name"
			class="input input-bordered w-full max-w-xs"
			name="last_name"
			value={form?.data?.last_name ?? ''}
		/>
		{#if form?.errors?.last_name}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{form?.errors?.last_name[0]}</span>
			</label>
		{/if}
	</div>
	<div class="form-control w-full max-w-xs">
		<label class="label" for="">
			<span class="label-text font-semibold">Phone Number</span>
		</label>
		<input
			type="text"
			placeholder="+254..."
			class="input input-bordered w-full max-w-xs"
			name="phone"
			value={form?.data?.phone ?? ''}
		/>
		{#if form?.errors?.phone}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{form?.errors?.phone[0]}</span>
			</label>
		{/if}
	</div>
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
				<span class="label-text-alt text-error">{form?.errors?.password[0]}</span>
			</label>
		{/if}
	</div>
	<div class="form-control w-full max-w-xs">
		<label class="label" for="">
			<span class="label-text  font-semibold">Confirm Password</span>
		</label>
		<input
			type="password"
			placeholder="Password"
			class="input input-bordered w-full max-w-xs"
			name="password_confirm"
		/>
		{#if form?.errors?.password_confirm}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{form?.errors?.password_confirm[0]}</span>
			</label>
		{/if}
	</div>

	<div class="flex justify-between">
		<div class="form-control">
			<label class="label cursor-pointer gap-2">
				<input
					type="checkbox"
					class="checkbox"
					name="is_landlord"
					bind:checked={landlord}
				/>
				<span class="label-text">I am a landlord </span>
			</label>
		</div>
	</div>
	{#if landlord}
		<LandlordForm {form} />
	{/if}
	<button type="submit" class="btn bg-reddish btn-ghost text-alice w-max ">
		Register Now
		<iconify-icon
			icon="uiw:swap-right"
			class=" inline text-white font-bold"
			width="20"
			height="20"
		/>
	</button>
</form>
