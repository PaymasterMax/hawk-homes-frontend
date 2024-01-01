<script lang="ts">
	import { Motion } from 'svelte-motion';
</script>

<div class="flex flex-col py-14 items-center gap-4">
	<span class="flex items-center gap-2">
		<span class="w-5 bg-reddish rounded-full h-[1px] block" />
		<h3 class="text-blueish uppercase font-opensans text-sm font-semibold">Founders</h3>
	</span>
	<h4 class="text-blackish font-oxy font-bold leading-10 text-4xl">Our Founders</h4>
	<small class="lg:w-2/6 w-5/6 text-center">
		At Jirani Properties, we believe that everyone deserves the opportunity to own a home or
		rent a comfortable place to live. That's why we're committed to providing our clients with
		the information and support they need to make informed decisions about their real estate
		needs. Our team of experienced and knowledgeable real estate professionals is here to help
		you with every aspect of the buying, selling, or renting process. We'll work with you to
		understand your individual needs and goals, and we'll provide you with the personalized
		service you deserve. Whether you're a first-time homebuyer, a seasoned investor, or a
		landlord looking for tenants, Jirani Properties has you covered. We're proud to be Kenya's
		trusted real estate partner, and we're committed to helping our clients achieve their
		property goals.
	</small>
</div>
<section class="h-max grid lg:grid-cols-2 grid-cols-1 gap-6 lg:w-4/5 w-11/12 mx-auto lg:py-14 ">
	<div class="bg-hold relative">
		<div class="flex gap-4 absolute bottom-3 w-full items-center justify-center">
			{#each ['mdi:twitter', 'basil:facebook-solid', 'basil:facebook-solid', 'mdi:vimeo', 'ri:linkedin-line'] as item, index}
				<Motion
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 * index, duration: 1 }}
					let:motion
				>
					<span
						use:motion
						class="grid place-items-center  bg-white cursor-pointer hover:bg-reddish  border h-8 w-8 rounded-full"
					>
						<iconify-icon
							icon={item}
							class=" inline text-dark  font-bold"
							width="16"
							height="16"
						/></span
					>
				</Motion>
			{/each}
		</div>
		<img
			src="https://media.istockphoto.com/id/1158343326/photo/hes-always-a-busy-man.jpg?s=612x612&w=0&k=20&c=M-PgpHkpK8sKGfghb8Jr4JMU_fcoexCgzBWoLCrxzLQ="
			alt=""
			class="aspect"
		/>
	</div>
	<div class="flex flex-col gap-4">
		<div class="">
			<h1 class="font-bold text-3xl font-oxy">Dr.Stephen Martin</h1>
			<small class="text-dark text-xs">Founder & CEO-Jirani Agency</small>
		</div>
		<p class="text-dark text-sm">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit blanditiis cum ipsa
			corrupti quas mollitia, quis expedita iste saepe recusandae fugit quia consequatur
			quisquam sed ratione ducimus quae omnis in?
		</p>
		<div class="flex gap-3 h-max">
			<img src="images/home/quotes2.png" alt="" srcset="" class="w-5 h-5 self-start" />
			<div class="h-full w-1 bg-black" />
			<div>
				<p class="font-bold italic text-black">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quod quo
					maxime impedit vero, dolore totam, nam ipsa earum adipisci et necessitatibus
					architecto quam laborum eveniet voluptatum minima? Recusandae!
				</p>
				<img src="images/home/mat.png" alt="" srcset="" class="mt-3" />
			</div>
		</div>
		<div class="flex w-max h-max items-center gap-2 ">
			<iconify-icon
				icon="ph:phone-call-thin"
				class=" inline text-reddish"
				width="30"
				height="30"
			/>

			<div class=" flex flex-col text-sm">
				<span class="text-blueish font-opensans  font-bold ">+(123) 546 9689</span>
				<small class="pb-1 flex items-center text-xs gap-1 font-opensans  font-semibold  "
					>Support@Jirani.com
				</small>
			</div>
		</div>
	</div>
</section>

<section class="bg-bg w-full py-14">
	<h1 class="text-center text-3xl font-extrabold py-5 font-oxy">Our Team</h1>
	<section class="h-screen grid lg:grid-cols-4 grid-cols-2 gap-4  lg:w-4/5 w-11/12 mx-auto  ">
		{#each { length: 8 } as item}
			<div class=" relative ">
				<div
					class="absolute w-full bottom-3 flex flex-col items-center justify-center text-white z-20"
				>
					<h1>Johnson Cater</h1>
					<small>Senior Realtor</small>
				</div>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuA4lLKTrY5npvxykY4buit7bomaCk30KINw&usqp=CAU"
					alt=""
					srcset=""
					class="aspect"
				/>
				<div class="absolute inset-0 bg-gradient-to-b from-hold/10 to-black z-10" />
			</div>
		{/each}
	</section>
</section>
