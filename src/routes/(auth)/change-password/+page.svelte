<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';

	import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const flash = getFlash(page);
	let email: string = '';
	const handleSibmit = async () => {
		const url = PUBLIC_BACKEND_URL + `users/reset`;
		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({ email_addr: email }),
			headers: { 'content-type': 'application/json' }
		});
		const dt = await res.json();
		if (dt.status !== 200) {
			$flash = { type: 'error', message: dt?.details };
			return;
		}

		$flash = { type: 'success', message: 'Change password link sent!Check your email' };
		goto('/auth?signin');
	};
</script>

<main class=" lg:min-h-96 h-screen  w-full">
	<h1 class="text-info text-center w-full py-2.5 px-4">
		To change your <b>Password</b>, enter the email you used to create the account.
	</h1>
	<form
		class="flex flex-col border lg:w-2/6 w-5/6  h-max p-8 gap-2 mx-auto my-10"
		on:submit|preventDefault={handleSibmit}
	>
		<label for="email" class="label-text text-2xl font-extrabold"
			>Enter Your Account Email</label
		>
		<input
			type="email"
			name="email"
			class="input input-bordered input-sm"
			placeholder="Enter Your Email"
			bind:value={email}
			required
		/>
		<button type="submit" class="btn btn-accent w-max bg-success text-bg">Send Link</button>
	</form>
</main>
