<script>
	import Service from '$components/others/service.svelte';
	import Letter from '$components/common/letter.svelte';
	// const serv=[{name:"Buy,sell or rent easy way",icon:"v"}]
</script>

<svelte:head>
	<title>Services|Jirani</title>
</svelte:head>
<main class="bg-white">
	<section
		class="w-full grid place-items-center relative h-52 bg-dark"
		style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8QhV-fIoU51OH55BmDvWEGgWMyjJZaVy3w&usqp=CAU);"
	>
		<div class="absolute inset-0 bg-black/25 z-10" />
		<div class=" breadcrumbs w-max mx-auto py-4 text-white relative  z-20">
			<ul>
				<li><a href="/">Home</a></li>
				<li class="text-white">Services</li>
			</ul>
		</div>
	</section>
	<section class=" pt-14 mx-auto">
		{#each { length: 8 } as item, index}
			<Service type={{ name: 'Get in Touch', href: '' }} {index} />
		{/each}
		<section class="grid lg:grid-cols-2 w-full gap-6">
			<div class="bg-[#232950] text-white flex flex-col gap-4 py-8 items-center">
				<h1 class="font-extrabold text-2xl lg:w-4/6 w-11/12">Real Estate Inquiry Form</h1>
				<form class="bg-white p-8 text-black flex flex-col gap-6 lg:w-4/6 w-11/12">
					<div class="flex flex-col gap-2">
						<span class="label-text ">Inquiry Type</span>

						<select class="border-b py-1 px-2">
							<option disabled selected>Select Type</option>
						</select>
					</div>
					<div>
						<span class="label-text">Personal Info</span>
						<div class="grid grid-cols-2 gap-4">
							<select class="border-b py-1 px-2">
								<option disabled selected>Select</option>
							</select>
							<input
								type="text"
								class="py-3 bg-transparent block w-full border-b outline-none  text-sm focus:border-blue-500 focus:ring-blue-500"
								placeholder="Enter Your Name"
							/>
						</div>
					</div>
					<div class="flex flex-col gap-2">
						<span class="label-text">Email</span>

						<input
							type="text"
							class="py-3 bg-transparent block w-full border-b outline-none  text-sm focus:border-blue-500 focus:ring-blue-500"
							placeholder="Email Address"
						/>
					</div>
					<div class="">
						<span class="label-text">How to Address you</span>
						<div class="grid grid-cols-2 gap-4">
							<select class="border-b py-1 px-2 col-span-2">
								<option disabled selected>Select</option>
							</select>
							<input
								type="text"
								class="py-3 bg-transparent block w-full border-b outline-none  text-sm focus:border-blue-500 focus:ring-blue-500"
								placeholder="Max Price"
							/>
							<input
								type="text"
								class="py-3 bg-transparent block w-full border-b outline-none  text-sm focus:border-blue-500 focus:ring-blue-500"
								placeholder="Min Size(sqrt)"
							/>
						</div>
					</div>
					<button class="btn w-full bg-reddish text-white " type="submit"
						>Send Message</button
					>
				</form>
			</div>
			<div class=" flex flex-col gap-4 mx-auto p-8">
				<h1 class="text-3xl font-extrabold font-oxy leading-7 uppercase">
					Why choose Jirani
				</h1>
				<small class="text-dark w-5/6"
					>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi
					repudiandae natus reiciendis eos similique. Atque qui esse rerum exercitationem
					odit, illo cupiditate deserunt velit laudantium pariatur similique suscipit
					odio.</small
				>
				<div class="flex flex-col gap-4">
					{#each { length: 4 } as item, index}
						<div class="flex gap-4 ">
							<div
								class="border border-reddish rounded-lg grid place-items-center w-16 h-16"
							>
								<img
									src="images/services/v{index + 1}.png"
									alt=""
									class="w-8 h-8"
								/>
							</div>
							<div class="flex flex-col gap-1 lg:w-2/4 w-3/4  ">
								<b class="font-extrabold">Buy,sell or rent easy way</b>
								<small class="text-xs text-dark"
									>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Temporibus perspiciatis excepturi obcaecati
								</small>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	</section>

	<Letter />
</main>
