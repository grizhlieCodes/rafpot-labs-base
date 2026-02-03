<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import type { Snippet } from 'svelte';
	import { type NavLinks } from './Header.svelte';

	type Props = {
		navLinks: NavLinks;
    children?: Snippet;
	};

	let { navLinks, children }: Props = $props();
	const headerRightLinks = $derived(
		Array.from(
			Object.values(navLinks).filter((l) => {
				return l.linkType.cta === true;
			})
		) ?? []
	);
</script>

<ul class="hidden items-center justify-end lg:flex">
	{#each headerRightLinks as link, _i (link.id)}
		<li>
			<Button variant={link.variant} href={link.href}>
				{link.label}
			</Button>
		</li>
	{/each}

  {@render children?.()}
	<!-- Additional things will go here, like settings/config (dark mode,
			other stuff if i add it.) -->
</ul>
