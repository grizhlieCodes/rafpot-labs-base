<script module lang="ts">
	export type NavLink = {
		id: string;
		variant: ButtonVariant;
		href: string;
		label: string;
		sublinks: Array<any>;
		linkType: {
			mob: boolean;
			tab: boolean;
			cta: boolean;
		};
		customClass?: string;
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
	import { generateUuid } from '$lib/scripts/utils';
	import { getHeaderContext } from './headerContext';

	const h = getHeaderContext()

	let { children }: { children?: Snippet } = $props();
</script>

<svelte:window bind:innerWidth={h.windowInnerWidth} />

<header class="grid-wrapper inline-border global-border-bottom min-h-16.5 w-full" bind:this={h.headerRef}>
	<div
		class="header-content wrapper-content-center col-start-2
	-col-end-2 row-start-1 grid grid-cols-2 items-center px-5 py-3 md:grid-cols-[10rem_1fr_10rem]"
	>
		{@render children?.()}
	</div>
</header>
