<script>
	const sts = [
		{ name: 'years Experince', icon: 'icon', desc: '20+', color: 'bg-yelloish' },
		{ name: 'Active Listings', icon: 'icon-1', desc: '5,000', color: 'bg-reddish' },
		{ name: 'Monthly Sold', icon: 'icon-2', desc: '1,000+', color: 'bg-blueish' },
		{ name: 'Happy Clients', icon: 'icon-3', desc: '50,000', color: 'bg-grennish' }
	];
</script>

<section class="h-max py-10">
	<section class="lg:w-4/5 w-11/12 mx-auto grid lg:grid-cols-4 grid-cols-2 gap-6">
		{#each sts as item}
			<div class="{item.color} py-10 flex flex-col items-center gap-2 text-white">
				<img
					src="/images/stats/{item.icon}.png"
					alt=""
					srcset=""
					class="lg:w-14 lg:h-14 w-10 h-10"
				/>
				<b class="text-3xl font-extrabold">{item.desc}</b>
				<small>{item.name}</small>
			</div>
		{/each}
	</section>
</section>
