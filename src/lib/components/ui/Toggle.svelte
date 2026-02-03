<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/scripts/utils';
	import { Toggle } from 'bits-ui';
	import { clickableStyles, type ButtonVariant, type ButtonSize } from '$lib/components/ui/Button.svelte';
	// let toggled = $state(false);

	type ToggleProps = {
		size?: ButtonSize;
		variant?: ButtonVariant;
		children?: Snippet;
		class?: string;
		ariaLabel: string;
		toggled: boolean;
	};

	let { size = 'small', variant = 'base', ariaLabel, children, class: className = '', toggled = $bindable(false) }: ToggleProps = $props();

	let sizeConfig = $derived(clickableStyles.sizeOptions[size]);
	let variantStyling = $derived(toggled ? clickableStyles.variantToggled[variant] : clickableStyles.variantBase[variant]);
	let toggleStyling = $derived(cn(clickableStyles.base, sizeConfig.button, variantStyling, clickableStyles.variantHover[variant], className));

  let toggledClass = $derived(toggled ? 'toggled' : '')
</script>

<Toggle.Root aria-label={ariaLabel} class="{toggleStyling} {toggledClass}" bind:pressed={toggled}>
	{@render children?.()}
</Toggle.Root>