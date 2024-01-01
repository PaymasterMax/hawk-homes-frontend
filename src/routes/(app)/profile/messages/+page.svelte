<script lang="ts">
</script>

<section class="grid lg:grid-cols-2 gap-4">
	<div class="form-control">
		{#each { length: 4 } as item}
			<div class="flex gap-4 p-4 hover:bg-bg cursor-pointer">
				<div class="avatar">
					<div class="w-24 rounded-full">
						<img
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							alt=""
						/>
					</div>
				</div>
				<div class="flex flex-col justify-center">
					<h1 class="label-text">Amanda Angels</h1>
					<small>You:Will Update you right away</small>
				</div>
			</div>
		{/each}
	</div>
	<div class="  ">
		<div class="flex justify-between items-center py-4">
			<h1 class="stat-title">Henry Johnson</h1>
			<a href="/"><button class="btn  btn-outline btn-sm">View Profile</button></a>
		</div>
		<div class="bg-bg p-2 h-96 overflow-scroll ch">
			<div class="chat chat-start">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<img
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							alt=""
						/>
					</div>
				</div>
				<div class="chat-header">
					Henry Johnson
					<time class="text-xs opacity-50">12:45</time>
				</div>
				<div class="chat-bubble">I like this one 🔥.</div>
				<div class="chat-footer opacity-50">Delivered</div>
			</div>
			<div class="chat chat-end">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<img src="https://i.stack.imgur.com/JYvDU.png?s=256&g=1" alt="" />
					</div>
				</div>
				<div class="chat-header">
					Anakin
					<time class="text-xs opacity-50">12:46</time>
				</div>
				<div class="chat-bubble">Sorry!</div>
				<div class="chat-footer opacity-50">Seen at 12:46</div>
			</div>
			<div class="chat chat-end">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<img src="https://i.stack.imgur.com/JYvDU.png?s=256&g=1" alt="" />
					</div>
				</div>
				<div class="chat-header">
					Anakin
					<time class="text-xs opacity-50">12:47</time>
				</div>
				<div class="chat-bubble">Its taken.</div>
				<div class="chat-footer opacity-50">Seen at 12:49</div>
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
			<button class="btn btn-md btn-success">Send Message</button>
		</div>
	</div>
</section>

<style>
	.ch::-webkit-scrollbar {
		display: none;
	}
</style>
