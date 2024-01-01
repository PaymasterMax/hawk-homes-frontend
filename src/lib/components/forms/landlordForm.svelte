<script lang="ts">
	export let form: any;
</script>

<div class="">
	<div class="form-control w-full max-w-xs">
		<label class="label" for="">
			<span class="label-text  font-semibold">KRA</span>
		</label>
		<input
			type="text"
			placeholder="KRA PIN"
			class="input input-bordered w-full max-w-xs"
			name="kra_pin"
			value={form?.data?.kra_pin ?? ''}
		/>
		{#if form?.errors?.kra_pin}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{form?.errors?.kra_pin[0]}</span>
			</label>
		{/if}
	</div>

	<div class="form-control w-full max-w-xs">
		<label class="label" for="">
			<span class="label-text font-semibold">Id Number</span>
		</label>
		<input
			type="number"
			placeholder="id number"
			class="input input-bordered w-full max-w-xs"
			name="id_no"
			value={form?.data?.id_no ?? ''}
		/>
		{#if form?.errors?.id_no}
			<!-- content here --><label for="" class="label">
				<span class="label-text-alt text-error">{form?.errors?.id_no[0]}</span>
			</label>
		{/if}
	</div>
</div>
