<form action="" class="border p-4 flex flex-col gap-6 w-full bg-white">
	<h1 class="font-bold text-xl font-oxy my-5">Send Message</h1>
	<div>
		<label for="input-label" class="block text-sm  mb-2 text-dark font-bold">Name</label>
		<input
			type="text"
			class="py-3  block w-full border-b outline-none  text-sm focus:border-blue-500 focus:ring-blue-500"
			placeholder="Enter Your Name"
		/>
	</div>
	<div>
		<label for="input-label" class="block text-sm font-bold mb-2 text-dark">Email</label>
		<input
			type="email"
			class="py-3  block w-full border-b outline-none  text-sm focus:border-blue-500 focus:ring-blue-500"
			placeholder="you@site.com"
		/>
	</div>
	<div>
		<label for="input-label" class="block text-sm font-bold mb-2 text-dark">Phone</label>
		<input
			type="text"
			class="py-3  block w-full border-b outline-none  text-sm focus:border-blue-500 focus:ring-blue-500"
			placeholder="Enter Your Phone Number"
		/>
	</div>
	<div>
		<label for="input-label" class="block text-sm font-bold mb-2 text-dark">Message</label>
		<textarea class="border-b w-full outline-none" rows="5" placeholder="Message" />
	</div>

	<a
		href="/#"
		class="text-white  flex gap-2 h-10 items-center justify-center  bg-reddish  focus:ring-4 focus:outline-none focus:ring-reddish
                      font-oxy uppercase shadow-lg shadow-reddish ring-reddish/50  font-bold  text-sm 
                       px-5 py-2.5 text-center  "
	>
		Send Message<iconify-icon
			icon="system-uicons:arrow-right"
			class=" inline text-white font-bold"
			width="25"
			height="25"
		/>
	</a>
</form>
