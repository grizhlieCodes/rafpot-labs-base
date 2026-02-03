<script lang="ts">
	import { resolve } from '$app/paths';
	import { cn } from '$lib/scripts/utils';
	import { clickableStyles } from '$lib/components/ui/Button.svelte';
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet; href: any; class?: string; };
	let { children, href, class: className }: Props = $props();
</script>

<div class={cn('grid-row-1 h-max', className)}>
	<a href={href} class={cn(clickableStyles.base, clickableStyles.variantBase.link, clickableStyles.variantHover.link, 'min-w-min text-lg shadow-none')}>
		{@render children?.()}
	</a>
</div>
