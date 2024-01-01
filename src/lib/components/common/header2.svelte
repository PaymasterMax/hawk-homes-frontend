<script lang="ts">
	import { Motion } from 'svelte-motion';
	export let device: string;
</script>

<section class="h-[70vh] grid place-items-center">
	<Motion initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1 }} let:motion>
		<div use:motion class="w-3/6 flex flex-col items-center gap-6">
			<img src="/images/keep.png" alt="" class="" />
			<Motion
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 1,
					delay: 0.8,
					type: 'spring',
					stiffness: 600,
					damping: 20
				}}
				let:motion
			>
				<blockquote use:motion class="text-center capitalize">
					*{device} Design Coming Soon*
				</blockquote>
			</Motion>
		</div>
	</Motion>
</section>
