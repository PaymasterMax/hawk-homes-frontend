<script lang="ts">
	import { enhance } from '$app/forms';

	export let form: any;
</script>

<form class="flex flex-col gap-4" action="?/signin" method="post" use:enhance>
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
		/>{#if form?.errors?.email_addr}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{form?.errors?.email_addr[0]}</span>
			</label>
		{/if}
	</div>
	<div class="form-control w-full max-w-xs">
		<label class="label" for="">
			<span class="label-text  font-semibold">Enter Password</span>
		</label>
		<input
			type="password"
			placeholder="password"
			class="input input-bordered w-full max-w-xs"
			name="password"
		/>{#if form?.errors?.password}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{form?.errors?.password[0]}</span>
			</label>
		{/if}
		<div class="flex items-center justify-between">
			<label for="" class="label">
				<a href="/change-password"
					><span
						class="label-text-alt hover:text-slate-500 font-bold text-blueish underline"
						>Forgot Password?</span
					></a
				>
			</label><label for="" class="label">
				<a href="/otp"
					><span
						class="label-text-alt text-slate-500 font-bold hover:text-blueish underline"
						>Not Activated?</span
					></a
				>
			</label>
		</div>
	</div>

	<button
		class="text-white  flex gap-2  items-center rounded  bg-reddish  focus:ring-4 focus:outline-none focus:ring-reddish
     dark:focus:ring-reddish font-oxy w-max  uppercase shadow-lg shadow-reddish ring-reddish/50  font-bold  lg:text-sm text-[11px] 
    lg:px-5 px-2 lg:py-2.5 py-1.5 text-center  "
	>
		Sign In
		<iconify-icon
			icon="uiw:swap-right"
			class=" inline text-white font-bold"
			width="20"
			height="20"
		/>
	</button>
</form>
