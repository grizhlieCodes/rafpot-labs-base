<script lang="ts">
	import type { NavLinks } from './Header.svelte';
	import { page } from '$app/state';
	import Toggle from '$lib/components/ui/Toggle.svelte';
	import HeaderMobileLink from './HeaderMobileLink.svelte';
	import { getHeaderContext } from './headerContext';
	type Props = { navLinks: NavLinks };

	const h = getHeaderContext();
	const toggleMobileMenuActive = () => {
		h.mobMenuOpen = false;
	};

	let { navLinks }: Props = $props();
</script>

<div class="md-2:hidden grid-row-1 flex items-center justify-end md:col-span-2">
	<Toggle ariaLabel="click to toggle menu" bind:toggled={h.mobMenuOpen} class="aspect-square p-2.5" size="small" variant="ghost">
		<div class="**:bg-surface-7 relative aspect-square h-5 w-5 **:absolute **:block **:h-0.5 **:w-full **:transition-all **:duration-500">
			<span class={h.mobMenuOpen ? `top-1/2 -translate-y-1/2 rotate-405` : ' top-0 left-0'}></span>
			<span class={h.mobMenuOpen ? `top-1/2 -translate-y-1/2 scale-x-0 opacity-0` : 'top-1/2 left-0 -translate-y-1/2'}></span>
			<span class={h.mobMenuOpen ? `top-1/2  -translate-y-1/2 -rotate-405` : 'bottom-0 left-0'}></span>
		</div>
	</Toggle>
</div>

<nav
	style="--top: {h.headerHeight}px;"
	class="bg-surface-1 dark:bg-surface-16 fixed top-(--top) left-0 z-100 h-[calc(100dvh-var(--top))] w-full
			{h.mobMenuOpen ? 'grid-wrapper translate-y-0' : 'hidden translate-y-20 opacity-0 blur-md '}
		inline-border transition-all transition-discrete duration-300 starting:translate-y-20
		starting:opacity-0 starting:blur-md"
>
	<ul class="wrapper-content-center row-start-1 mx-auto flex w-full flex-col gap-2 p-5 *:w-full">
		{#each Array.from(Object.values(navLinks)) as link, _i (link.id)}
			{#if link.linkType.mob === true}
				<li>
					<HeaderMobileLink {link} {toggleMobileMenuActive} class="{page.url.pathname === link.href ? 'link-active' : ''} {link?.customClass ?? ''}" />
				</li>
			{/if}
		{/each}
	</ul>
</nav>
