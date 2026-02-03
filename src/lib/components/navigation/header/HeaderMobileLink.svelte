<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { cn } from '$lib/scripts/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
	};

	let { children, class: className }: Props = $props();
</script>

<Button class={cn('text-xl py-4', className)} variant="ghost" size="large">
	{@render children?.()}
</Button>
