<script lang="ts">
	import { page } from '$app/stores';
	import Icon from './icon.svelte';

	const tabs = [
		{
			name: 'moderation',
			icon: 'healthicons:ui-user-profile',
			admin: true
		},
		{
			name: 'listings',
			icon: 'icons8:list',
			admin: true
		},
		{
			name: 'favourites',
			icon: 'solar:folder-favourite-star-linear',
			admin: false
		},
		{
			name: 'messages',
			icon: 'simple-icons:googlemessages',
			admin: true
		},
		{
			name: 'settings',
			icon: 'ic:outline-settings',
			admin: false
		}
	];
</script>

<section class="bg-alice py-8">
	<div
		class="grid lg:grid-cols-5 grid-cols-3 gap-5 2xl:w-3/6  xl:w-3/6 lg:w-4/6 w-11/12  mx-auto"
	>
		{#if $page.data.user?.perm.role === 'Admin'}
			{#each tabs as item}
				{@const active = $page.url.pathname.split('/').includes(item.name)}
				<a class="tab " href="/profile/{item.name}">
					<button class="btn btn-md capitalize bg-white" class:active
						><Icon
							name={item.icon}
							color={active ? 'text-white' : 'text-blueish'}
						/>{item.name}</button
					></a
				>
			{/each}
		{:else}
			{#each tabs as item}
				{@const active = $page.url.pathname.split('/').includes(item.name)}
				{#if !item.admin}
					<a class="tab " href="/profile/{item.name}">
						<button class="btn btn-md capitalize bg-white" class:active
							><Icon
								name={item.icon}
								color={active ? 'text-white' : 'text-blueish'}
							/>{item.name}</button
						></a
					>
					<!-- content here -->
				{/if}
			{/each}
		{/if}
	</div>
</section>

<style>
	.active {
		@apply bg-reddish text-white;
	}
</style>
