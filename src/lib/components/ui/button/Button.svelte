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

	let buttonRef: HTMLElement | undefined = $state();

	$effect(() => {
		if (!buttonRef || !decorative) return;
		// Set a minWidth of element width + decorative sizing
		let { width } = buttonRef.getBoundingClientRect();
		let remWidth = width / 16 + 1;
		buttonRef.style.minWidth = `calc(${remWidth}rem + var(--_deco-dot-size) + var(--_decorative-button-padding-right))`;
	});
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	{onclick}
	bind:this={buttonRef}
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

			font-weight: var(--_button-font-weight, var(--font-weight-5));
			font-family: var(--base-font-family);

			font-size: var(--_button-font-size);
			box-shadow: 1px 3px 10px color-mix(in oklch, var(--color-surface-500) 60%, var(--color-surface-50));
			border: var(--button-border-size) solid var(--_button-border-col-hover, var(--_button-border-col, transparent));
			padding: var(--_button-padding);
			border-radius: var(--radius-base);

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
			"small" | "medium" | "default" | "large" | "extra-large"
			This controls things like font size, padding, decorative dot size
		*/
		.button {
			&.small {
				--_button-padding: var(--spacing-1-5) var(--spacing-2-5);
				--_button-font-size: var(--size-body-3);
				--_deco-dot-size: var(--spacing-1-5);
				--_decorative-button-padding-right: var(--spacing-1);
			}

			&.medium {
				--_button-padding: var(--spacing-2) var(--spacing-3);
				--_button-font-size: var(--size-body-4);
				--_deco-dot-size: var(--spacing-1-5);
				--_decorative-button-padding-right: calc(var(--spacing) * 1.25);
			}

			&.default {
				--_button-padding: var(--spacing-2) var(--spacing-3-5);
				--_button-font-size: var(--size-body-5);
				--_deco-dot-size: calc(var(--spacing) * 1.75);
				--_decorative-button-padding-right: var(--spacing-1-5);
			}

			&.large {
				--_button-padding: var(--spacing-2) var(--spacing-3);
				--_button-font-size: var(--size-body-6);
				--_deco-dot-size: calc(var(--spacing) * 1.8);
				--_decorative-button-padding-right: var(--spacing-2);
			}

			&.extra-large {
				--_button-padding: var(--spacing-2.5) var(--spacing-5);
				--_button-font-size: var(--size-body-7);
				--_deco-dot-size: var(--spacing-2);
				--_decorative-button-padding-right: var(--spacing-2);
				--_button-font-weight: var(--font-weight-4);
			}
		}

		/*
			>>> VARIANT SYSTEM <<<
			>> "base" | "primary" | "secondary" | "tertiary" | "outline" | "ghost" <<
			>> This predominantly controls the colors. <<
		*/
		.button {
			/* See color-tokens.css to review/change these values */
			&.base {
				--_button-bg-col: var(--surface-bg-2);
				--_button-text-col: var(--surface-text-3);
				--_deco-dot-col: var(--primary-bg-solid);
				--_button-border-col: var(--surface-border-1);
			}

			&.primary {
				--_button-bg-col: var(--primary-bg-solid);
				--_button-text-col: var(--primary-text-on-solid-1);
				--_deco-dot-col: var(--primary-bg-1);
				--_button-border-col: var(--primary-border-3);
			}

			&.secondary {
				--_button-bg-col: var(--secondary-bg-solid);
				--_button-text-col: var(--secondary-text-on-solid-1);
				--_deco-dot-col: var(--secondary-bg-1);
				--_button-border-col: var(--secondary-border-3);
			}

			&:hover {
				&:not(:is(.decorative)) {
					&.base {
						--_button-text-col-hover: var(--surface-text-3);
						--_button-bg-col-hover: var(--surface-bg-3);
						--_button-border-col-hover: var(--surface-border-solid);
					}

					&.primary {
						--_button-text-col-hover: var(--primary-text-on-solid-2);
						--_button-bg-col-hover: var(--primary-bg-solid-hover);
						--_button-border-col-hover: var(--primary-border-3);
					}

					&.secondary {
						--_button-text-col-hover: var(--secondary-text-on-solid-2);
						--_button-bg-col-hover: var(--secondary-bg-solid-hover);
						--_button-border-col-hover: var(--secondary-border-3);
					}
				}

				&:is(.decorative) {
					&.base {
						--_button-text-col-hover: var(--primary-text-on-solid-1);
						--_button-border-col-hover: var(--primary-border-2);
					}

					&.primary {
						--_button-text-col-hover: var(--primary-text-3);
						--_button-bg-col-hover: var(--primary-bg-solid-hover);
						--_button-border-col-hover: var(--primary-border-3);
					}
					&.secondary {
						--_button-text-col-hover: var(--secondary-text-on-solid-1);
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
				padding-right: calc(var(--_decorative-button-padding-right) + var(--_deco-dot-size));
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
