<script lang="ts">
	import type { NavLink, NavLinks } from './Header.svelte';
	import { page } from '$app/state';
	import HeaderDesktopLink from './HeaderDesktopLink.svelte';
	type Props = {
		navLinks: NavLinks;
	};

	let { navLinks }: Props = $props();

	const setLinkAsActive = (currentPathname: string, link: NavLink): boolean => {
		if (currentPathname === link.href) return true;
		return link.sublinks?.some((s) => s.href === currentPathname) ?? false;
	};
</script>

<nav class="md-2:block col-span-2 hidden lg:col-span-1">
	<ul class="flex items-center justify-end lg:justify-center">
		{#each Array.from(Object.values(navLinks)) as link, _i (link.id)}
			{#if link.linkType.tab === true}
				<HeaderDesktopLink {link}
				linkEqualsCurrentPage={setLinkAsActive(page.url.pathname, link)}
				class={link?.customClass ?? ''} />
			{/if}
		{/each}
	</ul>
</nav>
