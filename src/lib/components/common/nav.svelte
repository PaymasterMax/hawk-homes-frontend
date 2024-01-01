<script lang="ts">
	import { page } from '$app/stores';
	import { links } from '$helpers';
	import { Motion } from 'svelte-motion';
	import Auth from './auth.svelte';
</script>

<!-- content here -->
<Motion
	initial={{ y: -50, opacity: 0 }}
	animate={{ y: 0, opacity: 1 }}
	transition={{ delay: 0.5, duration: 1 }}
	let:motion
>
	<nav
		use:motion
		class="flex lg:w-4/5 w-11/12 mx-auto justify-between stroke items-center pt-14 pb-8"
	>
		<a href="/" class="flex items-center justify-center gap-2">
			<div class="relative flex h-16">
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

		<ul use:motion class="flex lg:gap-6 gap-2 w-max ">
			{#each links as link, index}
				<Motion
					initial={{ x: -15 * index }}
					animate={{ x: 0 }}
					transition={{ delay: 1.2, duration: 1 }}
					let:motion
				>
					{@const active = $page.url.pathname.replace(/^\/|\/$/g, '') === link.href}
					<li
						use:motion
						class:active
						class="text-blackish font-opensans py-1 px-2 w-max cursor-pointer capitalize text-sm font-semibold "
					>
						<a href="/{link.href}">{link.text}</a>
					</li></Motion
				>
			{/each}
		</ul>

		<Auth />
	</nav>
</Motion>

<style>
	.active {
		@apply border-b-2 border-reddish;
	}

	/* stroke */
	nav.stroke ul li a {
		position: relative;
	}
	nav.stroke ul li a:after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		width: 0%;
		content: '.';
		color: transparent;
		background: #aaa;
		height: 1px;
	}
	nav.stroke ul li a:hover:after {
		width: 100%;
	}
	nav ul li a,
	nav ul li a:after,
	nav ul li a:before {
		transition: all 0.5s;
	}
	nav ul li a:hover {
		color: #555;
	}
</style>
