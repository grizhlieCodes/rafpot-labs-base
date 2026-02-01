<script module lang="ts">
	export type ButtonVariant = 'base' | 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'link';
	export type ButtonSize = 'small' | 'base' | 'large';

	export const buttonStyles = {
		base: 'cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap border border-solid shadow-sm overflow-hidden transition-all duration-300 ease-in-out rounded-(--radius-base)',
		sizeOptions: {
			small: { button: 'px-3 py-1.5 text-sm', decorativeDotSize: 0.375, decorativePaddingRight: 0.25 },
			base: { button: 'px-4 py-1.5 text-md', decorativeDotSize: 0.45, decorativePaddingRight: 0.375 },
			large: { button: 'px-4 py-2 text-base', decorativeDotSize: 0.5, decorativePaddingRight: 0.5 }
		},
		variantBase: {
			base: 'bg-surface-2 text-surface-12 border-surface-4',
			primary: 'bg-primary-13 text-primary-1 border-primary-10',
			secondary: 'bg-secondary-9 text-secondary-1 border-secondary-10',
			danger: 'bg-danger-9 text-danger-1 border-danger-10',
			outline: 'bg-transparent text-surface-12 border-surface-4',
			ghost: 'bg-transparent text-surface-12 border-transparent shadow-none',
			link: 'bg-transparent text-surface-11 border-transparent shadow-none no-underline'
		},
		variantHover: {
			base: 'hover:bg-surface-4 hover:border-surface-5',
			primary: 'hover:bg-primary-15 hover:text-primary-1 hover:border-primary-11',
			secondary: 'hover:bg-secondary-10 hover:border-secondary-11',
			danger: 'hover:bg-danger-11 hover:border-danger-11',
			outline: 'hover:bg-surface-3 hover:border-surface-6',
			ghost: 'hover:bg-surface-2',
			link: 'hover:underline underline-offset-4'
		},
		decorative: {
			buttonBase: 'group',
			textBase: 'relative z-10 pr-[calc(var(--decorative-padding-right)+var(--decorative-dot-size))] transition-all duration-300 ease-in-out',
			textHover: 'group-hover:pr-0',
			dotBase:
				"before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-(--decorative-dot-size) before:h-(--decorative-dot-size) before:rounded-full before:-z-10 before:transition-transform before:duration-300 before:ease-in-out group-hover:before:scale-[40]"
		},
		decorativeVariants: {
			base: { button: 'border-surface-3 hover:border-primary-3', text: 'group-hover:text-primary-1', dot: 'before:bg-primary-9' },
			primary: { button: 'border-primary-8 hover:bg-primary-10 hover:border-primary-3', text: 'group-hover:text-primary-12', dot: 'before:bg-primary-2' },
			secondary: {
				button: 'border-secondary-8 hover:bg-secondary-10 hover:border-secondary-3',
				text: 'group-hover:text-secondary-12',
				dot: 'before:bg-secondary-2'
			},
			danger: { button: 'border-danger-8 hover:bg-danger-10 hover:border-danger-3', text: 'group-hover:text-danger-12', dot: 'before:bg-danger-2' },
			outline: { button: 'border-surface-4 hover:bg-surface-2 hover:border-surface-3', text: 'group-hover:text-surface-12', dot: 'before:bg-surface-4' },
			ghost: { button: 'hover:bg-surface-2', text: 'group-hover:text-surface-12', dot: 'before:bg-surface-4' },
			link: { button: 'hover:underline underline-offset-4', text: 'group-hover:text-primary-11', dot: 'before:bg-primary-2' }
		}
	} as const;
</script>

<script lang="ts">
	import { cn } from '$lib/scripts/utils';
	import { type ButtonProps } from '$lib/components/ui/types';

	let {
		children,
		href,
		disabled = false,
		class: className = undefined,
		variant = 'base',
		size = 'base',
		ref = $bindable(null),
		decorative = false,
		type = undefined,
		onclick,
		...restProps
	}: ButtonProps = $props();

	let buttonRef: HTMLElement | undefined = $state();

	let sizeConfig = $derived(buttonStyles.sizeOptions[size]);

	let buttonClass = $derived(
		cn(
			buttonStyles.base,
			sizeConfig.button,
			buttonStyles.variantBase[variant],
			decorative ? buttonStyles.decorative.buttonBase : buttonStyles.variantHover[variant],
			decorative ? buttonStyles.decorativeVariants[variant].button : '',
			className
		)
	);

	let decorativeTextClass = $derived(
		cn(
			buttonStyles.decorative.textBase,
			buttonStyles.decorative.textHover,
			buttonStyles.decorative.dotBase,
			buttonStyles.decorativeVariants[variant].text,
			buttonStyles.decorativeVariants[variant].dot
		)
	);

	let decorativeStyle = $derived(
		decorative ? `--decorative-dot-size: ${sizeConfig.decorativeDotSize}rem; --decorative-padding-right: ${sizeConfig.decorativePaddingRight}rem;` : undefined
	);

	$effect(() => {
		if (!buttonRef) return;
		if (!decorative) {
			buttonRef.style.minWidth = '';
			return;
		}
		// Set a minWidth of element width + decorative sizing
		let { width } = buttonRef.getBoundingClientRect();
		let remWidth = width / 16 + 1;
		buttonRef.style.minWidth = `calc(${remWidth}rem + ${sizeConfig.decorativeDotSize}rem + ${sizeConfig.decorativePaddingRight}rem)`;
	});
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
	style={decorativeStyle}
>
	{#if !decorative}
		{@render children?.()}
	{:else}
		<p class={decorativeTextClass}>
			{@render children?.()}
		</p>
	{/if}
</svelte:element>
