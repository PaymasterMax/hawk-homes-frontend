<script>
	import Letter from '$components/common/letter.svelte';
	import { Motion } from 'svelte-motion';
</script>

<svelte:head>
	<title>Contact|Jirani</title>
</svelte:head>
<main class="">
	<section
		class="w-full grid place-items-center h-52 bg-hold relative"
		style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8QhV-fIoU51OH55BmDvWEGgWMyjJZaVy3w&usqp=CAU);"
	>
		<div class="absolute inset-0 bg-black/25 z-10" />
		<div class="breadcrumbs w-max mx-auto py-4 text-white  relative z-20">
			<ul>
				<li class="underline"><a href="/">Home</a></li>

				<li>Contact</li>
			</ul>
		</div>
	</section>
	<section class="lg:w-4/5 w-11/12 mx-auto grid lg:grid-cols-2 my-16">
		<div class="flex flex-col gap-6">
			<h2 class="text-3xl font-extrabold font-oxy">
				We’re Ready to Help You About Any Real Estate Problems!
			</h2>
			<p class="text-dark text-sm">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id libero quia
				quasi laudantium asperiores! Rem, sit placeat veritatis culpa eius iure voluptatum
				dolor, nesciunt blanditiis sint maiores repudiandae quod.
			</p>
			<div class="w-full">
				<h1 class="capitalize">Our head Office:</h1>

				<b class="w-3/6">631 Taylor Street, Mount Vernon, Newyork 10550 - USA</b>
			</div>
			<div class="flex w-max h-max items-center gap-2 ">
				<iconify-icon
					icon="ph:phone-call-thin"
					class=" inline text-reddish"
					width="30"
					height="30"
				/>

				<div class=" flex flex-col text-sm">
					<span class="text-blueish font-opensans  font-bold "
						><a href="tel:546 9689<">+(123) 546 9689</a>
					</span>
					<small
						class="pb-1 flex items-center text-xs gap-1 font-opensans  font-semibold  "
						>Support@Jirani.com
					</small>
				</div>
			</div>
			<div class="flex gap-4">
				{#each ['mdi:twitter', 'basil:facebook-solid', 'basil:facebook-solid', 'mdi:vimeo', 'ri:linkedin-line'] as item, index}
					<Motion
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 * index, duration: 1 }}
						let:motion
					>
						<span
							use:motion
							class="grid place-items-center  bg-transparent cursor-pointer hover:bg-reddish  border h-8 w-8 rounded-full"
						>
							<iconify-icon
								icon={item}
								class=" inline text-slate-500  font-bold"
								width="16"
								height="16"
							/></span
						>
					</Motion>
				{/each}
			</div>
		</div>

		<div class="bg-teal-100 w-full my-5 h-96 relative cursor-zoom-in">
			<div class="absolute inset-0">
				<img
					src="https://neilpatel.com/wp-content/uploads/2017/10/pasted-image-0-427.png"
					alt=""
					class=" object-cover h-full w-full"
				/>
			</div>
		</div>
	</section>
	<section class=" bg-alice flex items-center flex-col justify-center py-14 gap-6">
		<span class="flex items-center gap-2">
			<Motion
				initial={{ width: 0 }}
				animate={{ width: 20 }}
				transition={{ duration: 0.5, delay: 1 }}
				let:motion
			>
				<span use:motion class=" bg-reddish rounded-full h-[1px] block" />
			</Motion>

			<h3 class="text-blueish uppercase font-opensans text-xs font-semibold">
				Get in touch with us
			</h3>
		</span>
		<h4 class="text-blackish font-oxy font-bold leading-10 text-4xl">Send a Message</h4>
		<small class="lg:w-2/6 w-4/6 text-center">
			Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidata proident, sunt in culpa qui officia deserunt mollit
		</small>
		<form action="" class=" grid lg:grid-cols-3 lg:w-3/5 w-4/5 grid-cols-2 gap-5">
			<div>
				<input
					type="text"
					class="py-3 bg-transparent block w-full border-b outline-none  text-sm focus:border-blue-500 focus:ring-blue-500"
					placeholder="Enter Your Name"
				/>
			</div>
			<div>
				<input
					type="email"
					class="py-3  block w-full bg-transparent border-b outline-none  text-sm focus:border-blue-500 focus:ring-blue-500"
					placeholder="you@site.com"
				/>
			</div>
			<div>
				<input
					type="text"
					class="py-3 col-span-full lg:col-span-1 w-max  block border-b bg-transparent outline-none  text-sm focus:border-blue-500 focus:ring-blue-500"
					placeholder="Enter Your Phone Number"
				/>
			</div>
			<div class="col-span-full">
				<textarea
					class="border-b w-full outline-none bg-transparent focus:border-blue-500 focus:ring-blue-500"
					rows="5"
					placeholder="Message"
				/>
			</div>

			<div class="col-span-full flex justify-center">
				<button
					class="text-white   flex gap-2 h-10 items-center justify-center  bg-blueish  focus:ring-4 focus:outline-none focus:ring-blueish
                              font-oxy uppercase shadow-lg shadow-blueish ring-blueish/50  font-bold  text-sm 
                               px-5 py-2.5 text-center  "
				>
					Send Message<iconify-icon
						icon="system-uicons:arrow-right"
						class=" inline text-white font-bold"
						width="25"
						height="25"
					/>
				</button>
			</div>
		</form>
	</section>
	<Letter />
</main>
