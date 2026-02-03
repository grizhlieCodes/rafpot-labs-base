<script lang="ts">
	import type { NavLinks } from './Header.svelte';
	import { page } from '$app/state';
	import HeaderDesktopLink from './HeaderDesktopLink.svelte';
	type Props = {
		navLinks: NavLinks;
	};

	let { navLinks }: Props = $props();
</script>

<nav class="md-2:block col-span-2 hidden lg:col-span-1">
	<ul class="flex items-center justify-end lg:justify-center">
		{#each Array.from(Object.values(navLinks)) as link, _i (link.id)}
			{#if link.linkType.tab === true}
				<HeaderDesktopLink {link} linkEqualsCurrentPage={page.url.pathname === link.href} class={link?.customClass ?? ''} />
			{/if}
		{/each}
	</ul>
</nav>
