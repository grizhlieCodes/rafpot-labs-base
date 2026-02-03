<script lang="ts">
	import type { NavLinks } from './Header.svelte';
	import { page } from '$app/state';
	import Button from '$lib/components/ui/Button.svelte';
	type Props = {
		navLinks: NavLinks;
	};

	let { navLinks }: Props = $props();
</script>

<nav class="md-2:block col-span-2 hidden lg:col-span-1">
	<ul class="flex items-center justify-end lg:justify-center">
		{#each Array.from(Object.values(navLinks)) as link, _i (link.id)}
			{#if link.linkType.tab === true}
				<li>
					<Button
						variant={link.variant}
						href={link.href}
						class="{page.url.pathname === link.href ? 'link-active' : ''}
							{link?.customClass ?? ''}"
					>
						{link.label}
					</Button>
				</li>
			{/if}
		{/each}
	</ul>
</nav>