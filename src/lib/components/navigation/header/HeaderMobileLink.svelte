<script lang="ts">
	import type { NavLink } from './Header.svelte';
	import { Collapsible } from 'bits-ui';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import { cn } from '$lib/scripts/utils';
	import { clickableStyles } from '$lib/components/ui/Button.svelte';

	type Props = {
		link: NavLink;
		toggleMobileMenuActive: () => void;
		class?: string;
	};

	let { link, toggleMobileMenuActive, class: className }: Props = $props();
	let isOpen = $state(false);

	let linkHasSublinks = $derived(!!(link.sublinks && link.sublinks.length));
	let sizeConfig = $derived(clickableStyles.sizeOptions.base);
	let variant = $derived(link.variant ?? 'base');
	let layoutClass = $derived(linkHasSublinks ? 'w-full justify-between text-left' : 'w-full justify-start text-left');
	let buttonClass = $derived(
		cn(
			clickableStyles.base,
			sizeConfig.button,
			clickableStyles.variantBase[variant],
			clickableStyles.variantHover[variant],
			isOpen && linkHasSublinks ? clickableStyles.variantToggled[variant] : null,
			'no-underline',
			layoutClass,
			className
		)
	);

	import { getHeaderContext } from '$lib/components/navigation/header/headerContext';
	const h = getHeaderContext();

	$effect(() => {
		if (!h.mobMenuOpen && isOpen) {
			isOpen = false;
		}
	});
</script>

{#if linkHasSublinks}
	<Collapsible.Root bind:open={isOpen} class="w-full ">

		<Collapsible.Trigger class={buttonClass}>
			<span class="flex w-full items-center justify-between gap-2">
				<span class="text-left">{link.label}</span>
				<span class="transition-transform duration-300" class:rotate-180={isOpen}>
					<ChevronDown size="20" />
				</span>
			</span>
		</Collapsible.Trigger>

		<Collapsible.Content class="w-full rounded-base">
			<ul class="flex h-max w-full flex-col pt-2 pb-0">
				{#if link.sublinks && link.sublinks.length > 0}
					{#each link.sublinks as sublink, i}
						{#if sublink?.linkType === 'mobileMainLink' && i === 0}
							<a
								href={sublink.href ?? sublink.url}
								data-sveltekit-preload-data
								onclick={toggleMobileMenuActive}
								class="text-surface-12 dark:text-surface-5 focus-within:bg-surface-2 dark:focus-within:bg-surface-14 hover:bg-surface-2 dark:hover:bg-surface-14 w-full px-6 py-3 text-base italic"
							>
								{sublink.label}
							</a>
						{:else if sublink?.linkType !== 'mobileMainLink'}
							<a
								href={sublink.href ?? sublink.url}
								data-sveltekit-preload-data
								onclick={toggleMobileMenuActive}
								class="text-surface-12 dark:text-surface-5 focus-within:bg-surface-2 dark:focus-within:bg-surface-14 hover:bg-surface-2 dark:hover:bg-surface-14 w-full px-6 py-3 text-base"
							>
								{sublink.label}
							</a>
						{/if}
					{/each}
				{/if}
			</ul>
		</Collapsible.Content>
	</Collapsible.Root>
{:else}
	<a href={link.href} data-sveltekit-preload-data onclick={toggleMobileMenuActive} class={buttonClass}>
		{link.label}
	</a>
{/if}
