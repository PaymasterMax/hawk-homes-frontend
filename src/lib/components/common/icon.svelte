<script lang="ts">
	export let name: string;
	export let size: number = 16;
	export let color: string = '';
</script>

<iconify-icon icon={name} class=" inline {color} font-bold" width={size} height={size} />
