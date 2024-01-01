<div class="w-2/6 border lg:flex hidden flex-col gap-6 h-max p-8">
	<h2 class="text-xl font-oxy font-extrabold">Search Form</h2>
	<input type="text" class="input input-bordered w-full max-w-xs" placeholder="Keyword" />
	<h2 class="text-xl font-oxy font-extrabold">Categories</h2>
	<ul class="flex flex-col gap-4">
		{#each new Array(6) as item}
			<div class="flex items-center gap-2 hover:text-reddish">
				<iconify-icon
					icon="octicon:play-24"
					class=" inline text-hold  font-bold"
					width="16"
					height="16"
				/>
				<small class="text-dark hover:text-blueish">Rent a property</small>
			</div>
		{/each}
	</ul>
	<h2 class="text-xl font-oxy font-extrabold">Popular Posts</h2>
	{#each new Array(3) as item}
		<div class="flex items-start  py-5 border-b w-full gap-6">
			<div class="w-2/6 h-14 bg-hold " />
			<div class="flex flex-col gap-2 w-4/6">
				<h1 class="font-bold text-sm font-oxy leading-none">
					New York City Villas Hits The Market For $26.8 Million
				</h1>
				<span class="flex items-center gap-2">
					<iconify-icon
						icon="mdi-light:message"
						class=" inline text-reddish  font-bold"
						width="16"
						height="16"
					/>
					<small class="text-xs text-dark">July 30,2021</small>
				</span>
			</div>
		</div>
	{/each}
	<h2 class="text-xl font-oxy font-extrabold">Tags Cloud</h2>
	<div class="flex gap-2 flex-wrap">
		{#each new Array(7) as item}
			<div class="border grid place-items-center p-2 text-dark text-xs capitalize">
				Property
			</div>
		{/each}
	</div>
	<h2 class="text-xl font-oxy font-extrabold">Archives</h2>
	<select class="select select-bordered w-full max-w-xs">
		<option disabled selected>January 2021</option>
	</select>
</div>
