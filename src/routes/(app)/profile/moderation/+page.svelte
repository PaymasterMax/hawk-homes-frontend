<script lang="ts">
	import Icon from '$components/common/icon.svelte';
</script>

<div class="flex  lg:flex-row flex-col justify-between gap-4">
	<div class="grid grid-cols-4 lg:justify-center lg:w-2/6 w-11/12 gap-4">
		{#each ['All', 'Active', 'Pending', 'Trash'] as item, i}
			<button class="btn btn-md capitalize  {i === 0 ? 'bg-blueish text-white' : 'bg-white'}"
				>{item}</button
			>
		{/each}
	</div>
	<div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-center gap-4">
		<div class="bg-bg px-4 py-2 flex items-center gap-3">
			<label for="category">Category: </label>
			<select name="category" id="" class="select select-bordered select-sm">
				<option value="" selected>Real Estate</option>
			</select>
		</div>
		<div class="bg-bg px-4 py-2 flex items-center gap-3">
			<label for="category">Sort By: </label>
			<select name="category" id="" class="select select-bordered select-sm">
				<option value="" selected>Newest Listing</option>
			</select>
		</div>
		<input type="search" class="input input-md input-bordered" placeholder="Search" />
	</div>
</div>
<section class="my-5">
	<div class="overflow-x-auto min-h-screen">
		<table class="table">
			<!-- head -->
			<thead>
				<tr>
					<th class="flex gap-2 cursor-pointer hover:text-blueish">Name</th>
					<th>Address</th>
					<th>Category</th>
					<th>Status</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				<tr>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="mask mask-squircle w-24 h-24">
									<img
										src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/10/condo-vs-apartment.jpeg.jpg"
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
							</div>
							<div>
								<div class="font-bold">Modern Apartment</div>
								<div class="text-sm opacity-50">#fsdsf85sf8sf884sfsfsf-sf</div>
								<div class="text-sm opacity-50">Created:02.12.2022</div>
							</div>
						</div>
					</td>
					<td>
						1234 NW Bobcat Lane, St. Robert, MO 65584-5678
						<br />
						<span class="badge badge-ghost badge-sm">Firimbi Court</span>
					</td>
					<td>Purple</td>
					<th>
						<span class="badge badge-warning badge-lg">Pending</span>
					</th>
					<th>
						<div class="dropdown dropdown-end">
							<button tabindex="0" class="btn m-1">Action</button>
							<button
								tabindex="0"
								class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li on:keydown class=" font-bold w-full"><a href="/">Edit</a></li>
								<li on:keydown class=" font-bold w-full"><a href="/">Delete</a></li>
							</button>
						</div>
					</th>
				</tr>
				<!-- row 2 -->
			</tbody>
			<!-- foot -->
			<tfoot>
				<tr>
					<th class="flex gap-2 cursor-pointer hover:text-blueish">Name</th>
					<th>Address</th>
					<th>Category</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
			</tfoot>
		</table>
	</div>
</section>
