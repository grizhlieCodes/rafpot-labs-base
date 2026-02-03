import { resolve } from "$app/paths";
import type { NavLinks } from "$lib/components/navigation/Header/Header.svelte";
import { generateUuid } from "$lib/scripts/utils";

export let NAV_LINKS: NavLinks = {
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