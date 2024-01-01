<script lang="ts">
	import { Motion } from 'svelte-motion';

	import { page } from '$app/stores';
	import Icon from './icon.svelte';
	export let isOpen: boolean = false;
	const menu = [
		{
			name: 'Add Listing',
			href: '/add-listing',
			admin: true,
			icon: 'gg:add'
		},
		{
			name: 'Listings',
			href: '/profile/listings',
			icon: 'icons8:list',
			admin: true
		},
		{
			name: 'Favourites',
			href: '/profile/favourites',
			icon: 'solar:folder-favourite-star-linear',
			notif: true,
			admin: false
		},
		{
			name: 'messages',
			href: '/profile/messages',
			icon: 'simple-icons:googlemessages',
			notif: true,
			admin: true
		},
		{ name: 'Settings', href: '/profile/settings', icon: 'ic:outline-settings', admin: false }
	];
</script>

{#if !$page.data?.user}
	<!-- content here -->

	<div class="flex items-center gap-4">
		<Motion
			initial={{ x: -20 }}
			animate={{ x: 0 }}
			transition={{ delay: 1.6, duration: 1 }}
			let:motion
		>
			<a
				href="/auth?signin"
				use:motion
				on:click={() => (isOpen = false)}
				class="text-white  flex gap-2  items-center rounded  bg-reddish  focus:ring-4 focus:outline-none focus:ring-reddish
dark:focus:ring-reddish font-oxy   shadow-lg shadow-reddish ring-reddish/50    lg:text-xs text-[11px] 
lg:px-3 px-2.5 lg:py-1.5 py-1.5 text-center  "
			>
				Signin
			</a>
		</Motion>
		<Motion
			initial={{ x: 20 }}
			animate={{ x: 0 }}
			transition={{ delay: 1.6, duration: 1 }}
			let:motion
		>
			<a
				href="/auth?register"
				use:motion
				on:click={() => (isOpen = false)}
				class="text-white  flex gap-2  items-center rounded  bg-blueish  focus:ring-4 focus:outline-none focus:ring-blueish
font-oxy   shadow-lg shadow-blueish ring-blueish/50    lg:text-xs text-[11px] 
lg:px-3 px-2.5 lg:py-1.5 py-1.5 text-center  "
			>
				Register
			</a>
		</Motion>
	</div>
{:else}
	<div class="dropdown xl:dropdown-bottom md:dropdown-bottom dropdown-end relative z-50">
		<button class="flex items-center lg:flex-row flex-row-reverse gap-2" tabindex="0">
			<div class="avatar">
				<div class="w-10 rounded-full ">
					<img
						src="https://ui-avatars.com/api/?name={$page.data.user.first_name}+{$page
							.data.user.last_name}&background=random"
						alt=""
					/>
				</div>
			</div>
			<div class="flex  flex-col ">
				<h2 class="label-text truncate">
					{$page.data.user.first_name}
				</h2>
				<small class="text-xs text-slate-500">{$page.data.user.perm.role}</small>
			</div>
		</button>
		<button
			tabindex="0"
			class="dropdown-content  z-50 relative menu p-2 shadow bg-base-100 rounded-box w-52"
		>
			{#if $page.data.user?.perm.role === 'Admin'}
				{#each menu as item}
					<li on:keydown class=" font-bold w-full" on:click={() => (isOpen = false)}>
						<a href={item.href}
							><Icon name={item.icon} color="text-blueish" />
							{item.name}
							{#if item.notif}<span
									class="w-4 h-4 rounded-full bg-purple-500 grid place-items-center text-xs text-white"
									>8</span
								>
								<!-- content here -->
							{/if}
						</a>
					</li>
				{/each}
			{:else}
				{#each menu as item}
					{#if !item.admin}
						<!-- content here -->
						<li on:keydown class=" font-bold w-full" on:click={() => (isOpen = false)}>
							<a href={item.href}
								><Icon name={item.icon} color="text-blueish" />
								{item.name}
								{#if item.notif}<span
										class="w-4 h-4 rounded-full bg-purple-500 grid place-items-center text-xs text-white"
										>8</span
									>
									<!-- content here -->
								{/if}
							</a>
						</li>
					{/if}
				{/each}
			{/if}

			<li class=" w-full border-t">
				<form action="/logout" method="post" class="w-full">
					<button type="submit" class="w-full h-full flex gap-2"
						><Icon name="vaadin:sign-out" color="text-blueish" /> Sign Out</button
					>
				</form>
			</li>
		</button>
	</div>
{/if}
