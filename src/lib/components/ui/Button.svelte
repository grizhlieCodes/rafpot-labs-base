<script lang="ts">
	import { type ButtonProps } from '$lib/components/ui/types';

	let {
		children,
		href,
		disabled = false,
		class: className = undefined,
		variant = 'base',
		size = 'default',
		ref = $bindable(null),
		decorative = false,
		type = undefined,
		onclick,
		...restProps
	}: ButtonProps = $props();

	let buttonElement: HTMLElement | undefined = $state();
	let calculated = $state(false);

	$effect(() => {
		if (!buttonElement || calculated || !decorative) return;
		// Set a minWidth of element width + decorative sizing
		calculated = true;
		let { width } = buttonElement.getBoundingClientRect();
		let remWidth = width / 16 + 1;
		buttonElement.style.minWidth = `calc(${remWidth}rem + var(--deco-dot-size) + var(--decorative-button-padding))`;
	});
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	{onclick}
	bind:this={buttonElement}
	disabled={href ? undefined : disabled}
	aria-disabled={href ? disabled : undefined}
	class="button {variant} {size} {className}"
	class:decorative
	role={href && disabled ? 'link' : undefined}
	{type}
	{...restProps}
>
	{#if !decorative}
		{@render children?.()}
	{:else}
		<p class="text-content">
			{@render children?.()}
		</p>
	{/if}
</svelte:element>

<style>
	@layer components {
		.button {
			height: auto;

			background-color: var(--button-bg-col-hover, var(--button-bg-col));
			color: var(--button-text-col-hover, var(--button-text-col));
			border-radius: var(--theme-radius);
			font-weight: var(--button-font-weight);
			box-shadow: 1px 3px 10px color-mix(in oklch, var(--col-base-5) 60%, var(--col-base-0));
			border: var(--border-size-1) solid var(--button-border-col-hover, var(--button-border-col, transparent));
			padding: var(--_button-padding);
			font-size: var(--_button-font-size);

			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			justify-content: center;
			transition: all 250ms ease-in-out;
			overflow: hidden;
		}

		/*
			>>> SIZE SYSTEM <<<
			"small" | "medium" | "default" | "large" | "extra_large"
			This controls things like font size, padding, decorative dot size
		*/
		.button {
			&.small {
				--_button-padding: 0.25rem 0.2rem;
				--_button-font-size: var(--text-3);
				--deco-dot-size: 0.35rem;
				--decorative-button-padding: 0.25rem;
			}

			&.medium {
				--_button-padding: 0.35rem 0.5rem;
				--_button-font-size: var(--text-4);
				--deco-dot-size: 0.4rem;
				--decorative-button-padding: 0.3rem;
			}

			&.default {
				--_button-padding: 0.5rem 0.75rem;
				--_button-font-size: var(--text-6);
				--deco-dot-size: 0.425rem;
				--decorative-button-padding: 0.4rem;
			}

			&.large {
				--_button-padding: 0.5rem 0.75rem;
				--_button-font-size: var(--text-7);
				--deco-dot-size: 0.45rem;
				--decorative-button-padding: 0.5rem;
			}

			&.extra-large {
				--_button-padding: 0.55rem 1rem;
				--_button-font-size: var(--text-8);
				--deco-dot-size: 0.5rem;
				--decorative-button-padding: 0.55rem;
			}
		}

		/*
			>>> VARIANT SYSTEM <<<
			>> "base" | "brand" | "secondary" | "tertiary" | "outline" | "ghost" <<
			>> This predominantly controls the colors. <<
		*/
		.button {
			/* See color-tokens.css to review/change these values */
			&.base {
				--button-bg-col: var(--button-bg-base);
				--button-text-col: var(--button-text-base);
				--deco-dot-col: var(--button-deco-dot-base);
				--button-border-col: var(--button-border-base);
			}

			&.brand {
				--button-bg-col: var(--button-bg-brand);
				--button-text-col: var(--button-text-brand);
				--deco-dot-col: var(--button-deco-dot-brand);
				--button-border-col: var(--button-border-brand);
			}

			&.secondary {
				--button-bg-col: var(--button-bg-secondary);
				--button-text-col: var(--button-text-secondary);
				--deco-dot-col: var(--button-deco-dot-secondary);
				--button-border-col: var(--button-border-secondary);
			}

			&:not(:is(.decorative)) {
				&:hover {
					&.base {
						--button-text-col-hover: var(--button-text-base-hover);
						--button-bg-col: var(--button-bg-base-hover);
						--button-border-col-hover: var(--button-border-base-hover);
					}

					&.brand {
						--button-text-col-hover: var(--button-text-brand-hover);
						--button-bg-col-hover: var(--button-bg-brand-hover);
						--button-border-col-hover: var(--button-border-brand-hover);
					}
					&.secondary {
						--button-text-col-hover: var(--button-text-secondary-hover);
						--button-bg-col-hover: var(--button-bg-secondary-hover);
						--button-border-col-hover: var(--button-border-secondary-hover);
					}
				}
			}
		}

		/* Decorative Add-on (decorative: true) */
		/* Decorative color styling is handled above in the (variant) section */
		.button:is(.decorative) {
			> .text-content {
				z-index: 10;
				position: relative;
				padding-right: calc(var(--decorative-button-padding) + var(--deco-dot-size));
				transition: all 300ms ease-in-out;

				&::before {
					content: '';
					position: absolute;
					right: 0;
					top: 50%;
					transform: translateY(-50%);
					width: var(--deco-dot-size);
					height: var(--deco-dot-size);
					background-color: var(--deco-dot-col);
					border-radius: 999px;
					transition: transform 300ms ease-in-out;
					z-index: -1;
				}
			}

			&:hover {
				.text-content {
					padding-right: 0;

					&::before {
						transform: scale(3000%);
					}
				}
			}
		}
	}
</style>
