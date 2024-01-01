<script lang="ts">
	import { page } from '$app/stores';
	import { links } from '$helpers';
	import { Motion } from 'svelte-motion';

	import { fly } from 'svelte/transition';
	import Auth from './auth.svelte';

	let isOpen: boolean = false;
	function handleClickOutside(event: any) {
		const nav = document.querySelector('.nav');

		if (nav && !nav.contains(event.target)) {
			isOpen = false;
		}
	}

	window.addEventListener('click', handleClickOutside);
</script>

<!-- content here -->
<Motion
	initial={{ y: -50, opacity: 0 }}
	animate={{ y: 0, opacity: 1 }}
	transition={{ duration: 1 }}
	let:motion
>
	<nav
		use:motion
		class="flex nav lg:w-4/5 w-11/12 mx-auto  justify-between items-center py-7 z-40 relative  pr-3 "
	>
		<a href="/" class="flex items-center justify-center gap-2">
			<div class="relative flex h-14">
				<Motion
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.8, duration: 1 }}
					let:motion
				>
					<img use:motion src="/images/red.png" alt="logo" srcset="" class="" />
				</Motion>
			</div>
		</a>
		<div class="flex gap-4">
			<Auth bind:isOpen />

			<Motion
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.8, duration: 1 }}
				let:motion
			>
				<button
					use:motion
					class={` ${
						isOpen ? 'hidden' : 'flex'
					} text-white rounded-full relative z-20  gap-2 h-10 items-center justify-center  bg-reddish  focus:ring-1 focus:outline-none focus:ring-red-500
     font-oxy  uppercase shadow-lg shadow-reddish ring-reddish/50  font-bold  text-sm 
    px-5 py-2.5   `}
					on:click={() => {
						isOpen = !isOpen;
					}}
				>
					<iconify-icon
						icon="humbleicons:bars"
						class=" inline text-white "
						width="16"
						height="16"
					/>
				</button></Motion
			>
			<Motion
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.8, duration: 1 }}
				let:motion
			>
				<button
					use:motion
					class={` ${
						isOpen ? 'flex' : 'hidden'
					} text-white rounded-full relative z-20   gap-2 h-10 items-center justify-center  bg-reddish  focus:ring-1 focus:outline-none focus:ring-red-500
     h font-oxy  uppercase shadow-lg shadow-reddish ring-reddish/50  font-bold  text-sm 
    px-5 py-2.5   `}
					on:click={() => {
						isOpen = !isOpen;
					}}
				>
					<iconify-icon
						icon="iconoir:cancel"
						class=" inline text-white "
						width="16"
						height="16"
					/>
				</button>
			</Motion>
		</div>
		{#if isOpen}
			<!-- content here -->
			<Motion
				initial={{ x: 50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				let:motion
			>
				<ul
					out:fly|global={{ x: 50, duration: 500, delay: 300 }}
					use:motion
					class="flex flex-col gap-6 rounded-tl-2xl rounded-bl-2xl  bg-white shadow-2xl w-1/2 fixed right-0 top-0 pt-32 pl-10 h-screen z-10 "
				>
					{#each links as link, index}
						<Motion
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.08 * index, duration: 0.2 }}
							let:motion
						>
							{@const active =
								$page.url.pathname.replace(/^\/|\/$/g, '') === link.href}
							<a
								href="/{link.href}"
								on:click={() => {
									isOpen = false;
								}}
							>
								<li
									out:fly|global={{ x: 50, duration: 200, delay: 50 * index }}
									use:motion
									class="text-blackish font-opensans cursor-pointer capitalize py-2 text-sm font-semibold "
									class:active
								>
									{link.text}
								</li>
							</a>
						</Motion>
					{/each}
				</ul>
			</Motion>
		{/if}
	</nav>
</Motion>

<style>
	.active {
		@apply border-b text-reddish border-reddish;
	}
	/* * {
		border: 1px solid red;
	} */
</style>
