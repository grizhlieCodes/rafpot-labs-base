<script lang="ts">
	import type { NavLink } from './Header.svelte';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import { cn } from '$lib/scripts/utils';
	import { clickableStyles } from '$lib/components/ui/Button.svelte';

	type Props = {
		link: NavLink;
		linkEqualsCurrentPage: boolean;
		class?: string;
	};

	let { link, linkEqualsCurrentPage, class: className }: Props = $props();

	let linkHasSublinks = $derived(!!(link.sublinks && link.sublinks.length));
	let ariaHasPopup = $derived(linkHasSublinks ? true : false);
	let focusedInside = $state(false);
	let ariaExpanded = $state(false);

	let sizeConfig = $derived(clickableStyles.sizeOptions.base);
	let variant = $derived(link.variant ?? 'base');
	let buttonClass = $derived(
		cn(
			clickableStyles.base,
			sizeConfig.button,
			clickableStyles.variantBase[variant],
			clickableStyles.variantHover[variant],
			linkEqualsCurrentPage ? 'link-active' : null,
			'no-underline',
			className
		)
	);

	const handleFocus = () => {
		focusedInside = true;
		if (linkHasSublinks) ariaExpanded = true;
	};

	const handleBlur = () => {
		setTimeout(() => {
			if (!focusedInside) {
				ariaExpanded = false;
			}
			focusedInside = false;
		}, 0);
	};
</script>

<li
	class="group relative"
	onmouseover={() => (ariaExpanded = linkHasSublinks)}
	onmouseleave={() => (ariaExpanded = false)}
	onfocus={handleFocus}
	onfocusout={handleBlur}
>
	<a href={link.href} data-sveltekit-preload-data class={cn(buttonClass, 'flex items-center gap-1')} aria-haspopup={ariaHasPopup} aria-expanded={ariaExpanded}>
		<span class:font-semibold={linkEqualsCurrentPage}>{link.label}</span>
		{#if linkHasSublinks}
			<span class="transition-transform duration-500 group-focus-within:rotate-180 group-hover:rotate-180">
				<ChevronDown size="18" />
			</span>
		{/if}
	</a>
	{#if linkHasSublinks}
		<div
			class="pointer-events-none invisible absolute top-full left-1/2
		z-100 -translate-x-1/2 pt-4 opacity-0 transition-all
		duration-300 group-focus-within:pointer-events-auto
		group-focus-within:visible group-focus-within:opacity-100
		group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100"
		>
			<ul
				class="min-w-20rem border-surface-4 dark:border-surface-11 bg-surface-1 dark: dark:bg-surface-14 flex w-max flex-col rounded-base border border-solid py-4 text-left shadow-sm"
			>
				{#if link.sublinks && link.sublinks.length > 0}
					{#each link.sublinks as sublink}
						<a
							href={sublink.href ?? sublink.url}
							data-sveltekit-preload-data
							class="text-surface-12 dark:text-surface-5 focus-within:bg-surface-2 dark:focus-within:bg-surface-14 hover:bg-surface-2 dark:hover:bg-surface-14 px-6 py-2 text-base outline-0 transition-all duration-300"
						>
							{sublink.label}
						</a>
					{/each}
				{/if}
			</ul>
		</div>
	{/if}
</li>
