<script module lang="ts">
	export type ButtonVariant = 'base' | 'baseInvert' | 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'link';
	export type ButtonSize = 'small' | 'base' | 'large';

	export const clickableStyles = {
		base: 'cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap border border-solid shadow-sm overflow-hidden transition-all duration-(--duration-global-cols) ease-in-out rounded-base',
		sizeOptions: {
			small: { button: 'px-3 py-1.5 button-sm' },
			base: { button: 'px-4 py-1.5 button-base' },
			large: { button: 'px-4 py-2 button-lg' }
		},
		variantBase: {
			base: 'bg-surface-2 dark:bg-surface-15 text-surface-12 dark:text-surface-5 border-surface-4 dark:border-surface-14',
			baseInvert: 'bg-surface-12 dark:bg-surface-3 text-surface-1 dark:text-surface-15 border-surface-15 dark:border-surface-2',
			primary: 'bg-primary-12 dark:bg-primary-15 text-primary-3 dark:text-primary-2 border-primary-13 dark:border-primary-14',
			secondary: 'bg-secondary-9 dark:bg-secondary-14 text-secondary-1 dark:text-secondary-2 border-secondary-10 dark:border-secondary-15',
			danger: 'bg-danger-9 dark:bg-danger-14 text-danger-1 dark:text-danger-2 border-danger-10 dark:border-danger-13',
			outline: 'bg-transparent text-surface-12 dark:text-surface-5 border-surface-4 dark:border-surface-13',
			ghost:
				'bg-transparent text-surface-12 dark:text-surface-5 border-transparent shadow-none [&.link-active]:bg-surface-3 dark:[&.link-active]:bg-surface-13 [&.link-active]:font-semibold',
			link: 'bg-transparent text-surface-11 dark:text-surface-6 border-transparent shadow-none no-underline  [&.link-active]:text-semibold'
		},
		variantToggled: {
			base: 'bg-surface-5 dark:bg-surface-13 text-surface-12 dark:text-surface-5 border-surface-5 dark:border-surface-12',
			baseInvert: 'bg-surface-12 dark:bg-surface-3 text-surface-1 dark:text-surface-15 border-surface-15 dark:border-surface-2',
			primary: '',
			secondary: '',
			danger: '',
			outline: '',
			ghost: 'bg-surface-3 dark:bg-surface-14 border-transparent shadow-none',
			link: ''
		},
		variantHover: {
			// not-[.toggled] is specifically for the toggle component.
			// link-active is specifically for the link variant
			base: 'not-[.toggled]:hover:bg-surface-4 dark:not-[.toggled]:hover:bg-surface-13 not-[.toggled]:hover:border-surface-5 dark:not-[.toggled]:hover:border-surface-12',
			baseInvert:
				'not-[.toggled]:hover:bg-surface-16 dark:not-[.toggled]:hover:bg-surface-1 not-[.toggled]:hover:border-surface-16 dark:not-[.toggled]:hover:border-surface-1',
			primary:
				'not-[.toggled]:hover:bg-primary-15 dark:not-[.toggled]:hover:bg-primary-14 not-[.toggled]:hover:text-primary-1 not-[.toggled]:hover:border-primary-11 dark:not-[.toggled]:hover:border-primary-13',
			secondary:
				'not-[.toggled]:hover:bg-secondary-10 dark:not-[.toggled]:hover:bg-secondary-12 not-[.toggled]:hover:border-secondary-11 dark:not-[.toggled]:hover:border-secondary-11',
			danger:
				'not-[.toggled]:hover:bg-danger-11 dark:not-[.toggled]:hover:bg-danger-12 not-[.toggled]:hover:border-danger-11 dark:not-[.toggled]:hover:border-danger-11',
			outline:
				'not-[.toggled]:hover:bg-surface-3 dark:not-[.toggled]:hover:bg-surface-14 not-[.toggled]:hover:border-surface-6 dark:not-[.toggled]:hover:border-surface-12',
			ghost: 'not-[.toggled]:not-[.link-active]:hover:bg-surface-2 dark:not-[.toggled]:not-[.link-active]:hover:bg-surface-14',
			link: 'not-[.toggled]:hover:underline underline-offset-4'
		}
	} as const;

	export type ButtonProps = {
		children?: Snippet;
		href?: string | undefined | null;
		disabled?: boolean | undefined | null;
		class?: string | undefined | null;
		variant?: ButtonVariant;
		size?: ButtonSize;
		ref?: HTMLElement | undefined | null;
		type?: 'button' | 'submit' | undefined | null;
		onclick?: () => void;
	};
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/scripts/utils';

	let {
		children,
		href,
		disabled = false,
		class: className = undefined,
		variant = 'base',
		size = 'base',
		ref = $bindable(null),
		type = undefined,
		onclick,
		...restProps
	}: ButtonProps = $props();

	let buttonRef: HTMLElement | undefined = $state();
	let sizeConfig = $derived(clickableStyles.sizeOptions[size]);
	let buttonClass = $derived(
		cn(clickableStyles.base, sizeConfig.button, clickableStyles.variantBase[variant], clickableStyles.variantHover[variant], className)
	);
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	{onclick}
	bind:this={buttonRef}
	disabled={href ? undefined : disabled}
	aria-disabled={href ? disabled : undefined}
	class={buttonClass}
	role={href && disabled ? 'link' : undefined}
	{type}
	{...restProps}
>
	{@render children?.()}
</svelte:element>