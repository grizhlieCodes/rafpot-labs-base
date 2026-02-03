<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import type { Snippet } from 'svelte';
	import { type NavLinks } from './Header.svelte';
	import { cn } from '$lib/scripts/utils';

	type Props = {
		navLinks: NavLinks;
    children?: Snippet;
		class?: string;
	};

	let { navLinks, children, class: className }: Props = $props();
	const headerRightLinks = $derived(
		Array.from(
			Object.values(navLinks).filter((l) => {
				return l.linkType.cta === true;
			})
		) ?? []
	);
</script>

<ul class={cn("hidden items-center justify-end lg:flex", className)}>
	{#each headerRightLinks as link, _i (link.id)}
		<li>
			<Button variant={link.variant} href={link.href}>
				{link.label}
			</Button>
		</li>
	{/each}

  {@render children?.()}
</ul>