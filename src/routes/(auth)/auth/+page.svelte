<script lang="ts">
	import { page } from '$app/stores';
	import Register from '$components/forms/register.svelte';
	import Signin from '$components/forms/signin.svelte';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';

	import type { ActionData } from './$types';

	let activeTab: number = 1;
	export let form: ActionData;

	function setActive() {
		if ($page.url.search.includes('signin')) {
			activeTab = 1;
		} else if ($page.url.search.includes('register')) {
			activeTab = 2;
		}
	}
	$: setActive();
	const handleTab = (tabValue: number) => {
		activeTab = tabValue;
	};
</script>

<main class="flex min-h-screen flex-col my-10">
	<section class="lg:w-2/6 w-full mx-auto lg:shadow-2xl py-5 px-8 flex flex-col gap-5 ">
		<div class="tabs w-full py-2">
			<button
				class="tab tab-lifted {activeTab === 1 ? 'tab-active' : ''}"
				on:click={() => handleTab(1)}>Sign In</button
			>
			<button
				class="tab tab-lifted {activeTab === 2 ? 'tab-active' : ''}"
				on:click={() => handleTab(2)}>Register</button
			>
		</div>

		<a
			href="{PUBLIC_BACKEND_URL}users/oauth/facebook"
			class="border flex items-center justify-center gap-4 px-5 py-1.5"
		>
			<iconify-icon
				icon="devicon:facebook"
				class=" inline text-reddish font-bold"
				width="25"
				height="25"
			/>
			Continue with Facebook
		</a>
		<a
			href="{PUBLIC_BACKEND_URL}users/oauth/google"
			class="border flex items-center gap-4 justify-center px-5 py-1.5"
		>
			<iconify-icon
				icon="flat-color-icons:google"
				class=" inline text-reddish font-bold"
				width="25"
				height="25"
			/>
			Continue with Google
		</a>
		<div class="flex items-center w-full">
			<div class="h-0.5 w-full bg-hold" />
			<div class="px-2 text-sm text-dark ">OR</div>
			<div class="h-0.5 w-full bg-hold" />
		</div>
		{#if activeTab === 1}
			<Signin {form} />
		{:else}
			<Register {form} />
		{/if}
	</section>
	{#if form?.error}
		<!-- content here --><button class="btn btn-error">{form?.error}</button>
	{/if}
</main>
