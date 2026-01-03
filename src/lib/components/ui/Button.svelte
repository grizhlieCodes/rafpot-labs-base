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
		buttonElement.style.minWidth = `calc(${remWidth}rem + var(--_deco-dot-size) + var(--_decorative-button-padding))`;
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

			background-color: var(--_button-bg-col-hover, var(--_button-bg-col));
			color: var(--_button-text-col-hover, var(--_button-text-col));
			border-radius: var(--radius-base);
			font-weight: var(--_button-font-weight, var(--font-weight-5));
			font-family: var(--base-font-family);
			box-shadow: 1px 3px 10px color-mix(in oklch, var(--color-surface-500) 60%, var(--color-surface-50));
			border: var(--button-border-size) solid var(--_button-border-col-hover, var(--_button-border-col, transparent));
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
				--_button-padding: 0.35rem 0.2rem;
				--_button-font-size: var(--size-body-3);
				--_deco-dot-size: 0.35rem;
				--_decorative-button-padding: 0.25rem;
			}

			&.medium {
				--_button-padding: 0.35rem 0.5rem;
				--_button-font-size: var(--size-body-4);
				--_deco-dot-size: 0.4rem;
				--_decorative-button-padding: 0.3rem;
			}

			&.default {
				--_button-padding: 0.5rem 0.65rem;
				--_button-font-size: var(--size-body-5);
				--_deco-dot-size: 0.425rem;
				--_decorative-button-padding: 0.4rem;
			}

			&.large {
				--_button-padding: 0.5rem 0.75rem;
				--_button-font-size: var(--size-body-6);
				--_deco-dot-size: 0.45rem;
				--_decorative-button-padding: 0.5rem;
			}

			&.extra-large {
				--_button-padding: 0.55rem 1.25rem;
				--_button-font-size: var(--size-body-7);
				--_deco-dot-size: 0.5rem;
				--_decorative-button-padding: 0.55rem;
				--_button-font-weight: var(--font-weight-4);
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
				--_button-bg-col: var(--color-surface-2);
				--_button-text-col: var(--color-surface-7);
				--_deco-dot-col: var(--color-primary-4);
				--_button-border-col: var(--color-surface-3);
			}

			&.primary {
				--_button-bg-col: var(--color-primary-6);
				--_button-text-col: var(--color-primary-0);
				--_deco-dot-col: var(--color-primary-2);
				--_button-border-col: var(--color-primary-8);
			}

			&:hover {
				&:not(:is(.decorative)) {
					&.base {
						--_button-text-col-hover: var(--color-surface-9);
						--_button-bg-col-hover: var(--color-surface-3);
						--_button-border-col-hover: var(--color-surface-4);
					}

					&.primary {
						--_button-text-col-hover: var(--color-primary-1);
						--_button-bg-col-hover: var(--color-primary-7);
						--_button-border-col-hover: var(--color-primary-9);
					}
				}

				&:is(.decorative) {
					&.base {
						--_button-text-col-hover: var(--color-surface-9);
						--_button-border-col-hover: var(--color-surface-5);
					}

					&.primary {
						--_button-text-col-hover: var(--color-primary-8);
						--_button-bg-col-hover: var(--color-primary-8);
						--_button-border-col-hover: var(--color-primary-9);
					}
					&.secondary {
						--_button-text-col-hover: var(--);
						/* --_button-bg-col-hover: var(--button-bg-secondary-hover); */
						/* --_button-border-col-hover: var(--button-border-secondary-hover); */
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
				padding-right: calc(var(--_decorative-button-padding) + var(--_deco-dot-size));
				transition: all 300ms ease-in-out;

				&::before {
					content: '';
					position: absolute;
					right: 0;
					top: 50%;
					transform: translateY(-50%);
					width: var(--_deco-dot-size);
					height: var(--_deco-dot-size);
					background-color: var(--_deco-dot-col);
					border-radius: 999px;
					transition: transform 300ms ease-in-out;
					z-index: -1;
				}
			}

			&:hover {
				.text-content {
					padding-right: 0;

					&::before {
						transform: scale(4000%);
					}
				}
			}
		}
	}
</style>
