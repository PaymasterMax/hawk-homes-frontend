<script lang="ts">
	import AssetCard from '$components/cards/assetCard.svelte';
	import Icon from '$components/common/icon.svelte';

	import type { HouseFetch, HouseStatus } from '$interface/house';
	import { Motion } from 'svelte-motion';

	export let resolve: HouseFetch[];
	export let filter: HouseStatus;
	let filteredHouses = resolve;
	$: {
		function filterHouses() {
			switch (filter) {
				case 'All':
					return resolve;
				case 'Sold':
					return resolve.filter((x) => x.status === 'Sold');
				case 'Upcoming':
					return resolve.filter((x) => x.status === 'Upcoming');
				case 'Rent':
					return resolve.filter((x) => x.status === 'Rent');
				case 'Auction':
					return resolve.filter((x) => x.status === 'Auction');
				case 'Sale':
					return resolve.filter((x) => x.status === 'Sale');

				default:
					return resolve;
			}
		}
		filteredHouses = filterHouses();
	}
</script>

{#if !filteredHouses.length}
	<div class="flex items-center gap-4">
		<Icon name="pepicons-print:house-off" color="text-reddish" size={36} />
		<!-- <code>All Taken</code> -->
	</div>

	<!-- content here -->
{/if}
{#each filteredHouses as house, index}
	<Motion initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} let:motion>
		<div use:motion>
			<AssetCard {house} />
		</div>
	</Motion>
{/each}
