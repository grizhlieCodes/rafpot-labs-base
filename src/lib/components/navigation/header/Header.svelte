<script module lang="ts">
	export type NavLink = {
		id: string;
		variant: ButtonVariant;
		href: string;
		label: string;
		linkType: {
			mob: boolean;
			tab: boolean;
			cta: boolean;
		};
		customClass?: string;
		sublinks: Array<NavLink>;
	};

	export type NavLinks = Record<string, NavLink>;

	export let mobileLinks: NavLinks = {
		home: { id: generateUuid(), variant: 'ghost', href: resolve('/'), sublinks: [], label: 'Home', linkType: { mob: true, tab: true, cta: false } },
		services: {
			id: generateUuid(),
			variant: 'ghost',
			href: resolve('/services'),
			sublinks: [],
			label: 'Services',
			linkType: { mob: true, tab: true, cta: false }
		},
		about: { id: generateUuid(), variant: 'ghost', href: resolve('/about'), sublinks: [], label: 'About', linkType: { mob: true, tab: true, cta: false } },
		resources: {
			id: generateUuid(),
			variant: 'ghost',
			href: resolve('/resources'),
			sublinks: [],
			label: 'Resources',
			linkType: { mob: true, tab: true, cta: false }
		},
		testimonials: {
			id: generateUuid(),
			variant: 'ghost',
			href: resolve('/testimonials'),
			sublinks: [],
			label: 'Testimonials',
			linkType: { mob: true, tab: true, cta: false }
		},
		contactMob: {
			id: generateUuid(),
			variant: 'ghost',
			href: resolve('/contact'),
			sublinks: [],
			label: 'Contact',
			linkType: { mob: true, tab: true, cta: false },
			customClass: 'lg:hidden'
		},
		contactTab: {
			id: generateUuid(),
			variant: 'baseInvert',
			href: resolve('/contact'),
			sublinks: [],
			label: 'Contact',
			linkType: { mob: false, tab: false, cta: true }
		}
	};
</script>

<script lang="ts">
	import { resolve } from '$app/paths';
	import { type Snippet } from 'svelte';
	import { type ButtonVariant } from '$lib/components/ui/Button.svelte';
	import { cn, generateUuid } from '$lib/scripts/utils';
	import { getHeaderContext } from './headerContext';

	const h = getHeaderContext();

	let { children, class: className, isFixed = false }: { children?: Snippet; class?: string; isFixed?: boolean } = $props();

	const HEADER_BASE_STYLES = `grid-wrapper inline-border global-border-bottom min-h-16.5 w-full bg-white dark:bg-surface-15`;
	const FIXED_STYLES = `fixed! top-0 left-0 w-full z-2`;

	$effect(() => {
		h.headerIsFixed = isFixed;
	});

	let headerClass = $derived(`${HEADER_BASE_STYLES} ${isFixed ? FIXED_STYLES : ''}`);
</script>

<svelte:window bind:innerWidth={h.windowInnerWidth} />

<header class={cn(headerClass, className)} bind:this={h.headerRef}>
	<div class="header-content wrapper-content-center col-start-2 -col-end-2 row-start-1 grid grid-cols-2 items-center px-5 py-3 md:grid-cols-[10rem_1fr_10rem]">
		{@render children?.()}
	</div>
</header>
