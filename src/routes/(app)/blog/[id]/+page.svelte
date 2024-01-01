<script>
	import BlogCardFtr from '$components/cards/blogCardFtr.svelte';
	import PostCard from '$components/cards/postCard.svelte';
	import BlogPane from '$components/others/blogPane.svelte';
	import Letter from '$components/common/letter.svelte';
	import Icon from '$components/common/icon.svelte';
	import CommentCard from '$components/cards/commentCard.svelte';
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<main class="bg-white">
	<div class="text-sm breadcrumbs lg:w-4/5 w-11/12 mx-auto py-4 ">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/search">Blog</a></li>
			<li class="text-blueish">Energize your property search experience with Estina</li>
		</ul>
	</div>
	<section class="   mx-auto flex lg:w-4/5 w-11/12 py-14 lg:flex-row flex-col gap-6">
		<div class="lg:w-4/6 w-full ">
			<div class=" min-h-screen">
				<div class="bg-hold w-full h-1/2  relative">
					<img
						src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_164107628_970647970450057_56760.jpg"
						alt=""
						class="aspect"
					/>
				</div>
				<div class="py-5 flex flex-col gap-4">
					<div class="flex items-center gap-2">
						<button
							class="text-white  flex gap-2  items-center justify-center  bg-reddish  focus:ring-4 focus:outline-none focus:ring-reddish
								  font-oxy    text-xs
									w-max text-center px-2 py-1 "
						>
							Buy Home
						</button>
						<button
							class="text-white  flex gap-2  items-center justify-center  bg-reddish  focus:ring-4 focus:outline-none focus:ring-reddish
								  font-oxy     text-xs
									w-max text-center px-2 py-1 "
						>
							Property
						</button>
					</div>
					<a href="/blog/test">
						<h1 class="text-xl font-bold font-oxy">
							Energize your property search experience with Estina
						</h1>
					</a>

					<div class="flex lg:gap-4 gap-1 justify-between w-full  border-t py-8">
						<div class="flex items-center lg:gap-4 gap-1">
							<span class="flex items-center gap-2">
								<div class="avatar">
									<div class="w-10 rounded-full">
										<img
											src="https://media.gq.com/photos/56e853e7161e63486d04d6c8/4:3/w_1600,h_1200,c_limit/david-beckham-gq-0416-2.jpg"
											alt=""
											class="aspect"
										/>
									</div>
								</div>
								<small class="font-bold text-xs text-blueish">David Beckham</small>
							</span>
							<span class="flex items-center gap-2">
								<iconify-icon
									icon="formkit:date"
									class=" inline text-reddish  font-bold"
									width="16"
									height="16"
								/>
								<small>July 30,2021</small>
							</span>
							<span class="flex items-center gap-2">
								<iconify-icon
									icon="mdi-light:message"
									class=" inline text-reddish  font-bold"
									width="16"
									height="16"
								/>
								<small>2.3k</small>
							</span>
						</div>
					</div>
					<p class="text-dark text-sm pb-5 lg:pr-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit
						tenetur unde cupiditate quod quis cumque architecto, vitae, asperiores,
						nesciunt iure ipsum quidem! Illum est magni officiis nostrum, deserunt
						sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						obcaecati facere aperiam repellat incidunt animi cum, voluptates reiciendis
						eligendi modi illum? Autem voluptatem eaque, ipsam saepe cupiditate ex
						delectus doloribus.
					</p>
					<p class="text-dark text-sm pb-5 lg:pr-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit
						tenetur unde cupiditate quod quis cumque architecto, vitae, asperiores,
						nesciunt iure ipsum quidem! Illum est magni officiis nostrum, deserunt
						sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						obcaecati facere aperiam repellat incidunt animi cum, voluptates reiciendis
						eligendi modi illum? Autem voluptatem eaque, ipsam saepe cupiditate ex
						delectus doloribus.
					</p>
					<p class="text-dark text-sm pb-5 lg:pr-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit
						tenetur unde cupiditate quod quis cumque architecto, vitae, asperiores,
						nesciunt iure ipsum quidem! Illum est magni officiis nostrum, deserunt
						sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						obcaecati facere aperiam repellat incidunt animi cum, voluptates reiciendis
						eligendi modi illum? Autem voluptatem eaque, ipsam saepe cupiditate ex
						delectus doloribus.
					</p>
					<p class="text-dark text-sm pb-5 lg:pr-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit
						tenetur unde cupiditate quod quis cumque architecto, vitae, asperiores,
						nesciunt iure ipsum quidem! Illum est magni officiis nostrum, deserunt
						sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						obcaecati facere aperiam repellat incidunt animi cum, voluptates reiciendis
						eligendi modi illum? Autem voluptatem eaque, ipsam saepe cupiditate ex
						delectus doloribus.
					</p>
					<ul class="flex flex-col gap-1 my-5">
						{#each { length: 5 } as item}
							<li class="font-bold flex items-center gap-2">
								<iconify-icon
									icon="charm:tick"
									class=" inline text-reddish font-bold"
									width="25"
									height="25"
								/>Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</li>
						{/each}
					</ul>

					<div class="grid grid-cols-2 gap-4">
						<div class="bg-slate-500 h-56 " />
						<div class="bg-slate-500 h-56 " />
					</div>
					<p class="text-dark text-sm pb-5 lg:pr-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit
						tenetur unde cupiditate quod quis cumque architecto, vitae, asperiores,
						nesciunt iure ipsum quidem! Illum est magni officiis nostrum, deserunt
						sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						obcaecati facere aperiam repellat incidunt animi cum, voluptates reiciendis
						eligendi modi illum? Autem voluptatem eaque, ipsam saepe cupiditate ex
						delectus doloribus.
					</p>
					<p class="text-dark text-sm pb-5 lg:pr-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit
						tenetur unde cupiditate quod quis cumque architecto, vitae, asperiores,
						nesciunt iure ipsum quidem! Illum est magni officiis nostrum, deserunt
						sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						obcaecati facere aperiam repellat incidunt animi cum, voluptates reiciendis
						eligendi modi illum? Autem voluptatem eaque, ipsam saepe cupiditate ex
						delectus doloribus.
					</p>
				</div>
				<div class="flex flex-col gap-6">
					<h1 class="font-bold">Comments(2)</h1>
					<div class="flex flex-col gap-4 ">
						<CommentCard />
						<CommentCard />
					</div>
				</div>
				<div class="form-control gap-2 mt-2">
					<textarea
						name=""
						id=""
						cols="30"
						rows="5"
						class="textarea textarea-bordered"
						placeholder="My Reply"
					/>
					<button class="btn btn-md">Send Reply</button>
				</div>
			</div>
		</div>
		<BlogPane />
	</section>
	<Letter />
</main>
