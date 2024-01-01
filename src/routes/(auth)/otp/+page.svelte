<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import type { PageData } from './$types';

	import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	export let data: PageData;
	const flash = getFlash(page);
	let otp: string = data.otp ?? '';
	const handleSibmit = async () => {
		console.log('Sd');
		const url = PUBLIC_BACKEND_URL + `users/activate/${otp}`;
		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({})
		});
		if (res.status !== 200) {
			$flash = { type: 'error', message: 'invalid OTP!Try again' };
			return;
		}
		$flash = { type: 'success', message: 'Verification Success,Please Login' };
		goto('/auth?signin');
	};
</script>

<main class=" lg:min-h-96 h-screen  w-full">
	<h1 class="text-info text-center w-full py-2.5 px-4">
		We've sent an <b>OTP</b> to your phone or email.Please enter below to Verify your account.
	</h1>
	<form
		class="flex flex-col border lg:w-2/6 w-5/6  h-max p-8 gap-2 mx-auto my-10"
		on:submit|preventDefault={handleSibmit}
	>
		<label for="otp" class="label-text text-2xl font-extrabold">Enter OTP</label>
		<input
			type="text"
			class="input input-bordered input-sm"
			placeholder="Enter OTP"
			bind:value={otp}
			required
		/>
		<button type="submit" class="btn btn-accent w-max bg-success text-bg">Verify</button>
	</form>
</main>
