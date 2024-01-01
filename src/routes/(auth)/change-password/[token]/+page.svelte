<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import type { PageData } from './$types';

	import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { z } from 'zod';
	export let data: PageData;
	const flash = getFlash(page);
	let token: string = data.token ?? '';
	let cred = {
		password: '',
		confirm: ''
	};
	let errors: any;
	const passwordSchema = z
		.object({
			password: z
				.string({ required_error: 'Password is required' })
				.min(6, { message: 'Password must be atleast 6 chars' })
				.max(15, { message: 'password must be less than 15 chars' })
				.trim(),
			confirm: z.string({ required_error: 'Fill in password' }).min(1).trim()
		})
		.superRefine(({ password, confirm }, ctx) => {
			if (password !== confirm) {
				ctx.addIssue({
					message: 'Password must match',
					code: 'custom',
					path: ['password']
				});
				ctx.addIssue({
					message: 'Password must match',
					code: 'custom',
					path: ['confirm']
				});
			}
		});
	const handleSibmit = async () => {
		try {
			const { password } = passwordSchema.parse(cred);

			const url = PUBLIC_BACKEND_URL + `users/reset/complete`;
			const res = await fetch(url, {
				method: 'POST',
				body: JSON.stringify({ password, token }),
				headers: { 'content-type': 'application/json' }
			});
			if (res.status !== 200) {
				$flash = { type: 'error', message: 'invalid token!Try again' };
				return;
			}
			$flash = { type: 'success', message: 'Change Success,Please Login' };
			goto('/auth?signin');
		} catch (err: any) {
			if (err.flatten) {
				const { fieldErrors } = err.flatten();

				$flash = { type: 'error', message: 'Form Error' };

				errors = fieldErrors;
				return;
			}
			$flash = { type: 'error', message: 'Password Change Error' };
		}
	};
</script>

<main class=" lg:min-h-96 h-screen  w-full">
	<form
		class="flex flex-col border lg:w-2/6 w-5/6  h-max p-8 gap-2 mx-auto my-10"
		on:submit|preventDefault={handleSibmit}
	>
		<label for="token" class="label-text text-2xl font-extrabold">Enter new Password</label>
		<input
			type="password"
			class="input input-bordered input-sm"
			placeholder="Enter Password"
			bind:value={cred['password']}
			required
		/>
		{#if errors?.password}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{errors?.password[0]}</span>
			</label>
		{/if}
		<label for="token" class="label-text text-2xl font-extrabold">Confirm Password</label>
		<input
			type="password"
			class="input input-bordered input-sm"
			placeholder="Enter Password"
			bind:value={cred['confirm']}
			required
		/>
		{#if errors?.confirm}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{errors?.confirm[0]}</span>
			</label>
		{/if}
		<button type="submit" class="btn btn-accent w-max bg-teal text-bg">Change Password</button>
	</form>
</main>
