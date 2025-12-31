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
		buttonElement.style.minWidth = `calc(${remWidth}rem + var(--deco-dot-size) + var(--decorative-btn-padding))`;
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

			background-color: var(--btn-bg-col_hover, var(--btn-bg-col));
			color: var(--btn-text-col_hover, var(--btn-text-col));
			border-radius: var(--theme-radius);
			font-weight: var(--btn-font-weight);
			box-shadow: 1px 3px 10px color-mix(in oklch, var(--col-base-5) 60%, var(--col-base-0));
			border: var(--border-size-1) solid var(--btn-border-col_hover, var(--btn-border-col, transparent));
			padding: var(--btn-padding);
			font-size: var(--btn-font-size);

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
				--btn-padding: 0.25rem 0.2rem;
				--btn-font-size: var(--text-3);
				--deco-dot-size: 0.35rem;
				--decorative-btn-padding: 0.25rem;
			}

			&.medium {
				--btn-padding: 0.35rem 0.5rem;
				--btn-font-size: var(--text-4);
				--deco-dot-size: 0.4rem;
				--decorative-btn-padding: 0.3rem;
			}

			&.default {
				--btn-padding: 0.5rem 0.75rem;
				--btn-font-size: var(--text-6);
				--deco-dot-size: 0.425rem;
				--decorative-btn-padding: 0.4rem;
			}

			&.large {
				--btn-padding: 0.5rem 0.75rem;
				--btn-font-size: var(--text-7);
				--deco-dot-size: 0.45rem;
				--decorative-btn-padding: 0.5rem;
			}

			&.extra_large {
				--btn-padding: 0.55rem 1rem;
				--btn-font-size: var(--text-8);
				--deco-dot-size: 0.5rem;
				--decorative-btn-padding: 0.55rem;
			}
		}

		/*
			>>> VARIANT SYSTEM <<<
			>> "base" | "brand" | "secondary" | "tertiary" | "outline" | "ghost" <<
			>> This predominantly controls the colors. <<
		*/
		.button {
			&.base {
				--btn-bg-col: var(--col-base-2);
				--btn-text-col: var(--col-base-8);
				--deco-dot-col: var(--col-primary-5);
				--btn-border-col: var(--col-base-3);
			}

			&.brand {
				--btn-bg-col: var(--col-primary-3);
				--btn-text-col: var(--col-primary-10);
				--deco-dot-col: var(--col-primary-5);
				--btn-border-col: var(--col-primary-4);
			}

			&.secondary {
				--btn-bg-col: var(--col-secondary-3);
				--btn-text-col: var(--col-secondary-10);
				--deco-dot-col: var(--col-secondary-5);
				--btn-border-col: var(--col-secondary-4);
			}

			&:not(:is(.decorative)) {
				&:hover {
					&.base {
						--btn-text-col_hover: var(--col-base-2);
						--btn-bg-col: var(--col-base-7);
						--btn-border-col_hover: var(--col-base-5);
					}

					&.brand {
						--btn-text-col_hover: var(--col-primary-1);
						--btn-bg-col_hover: var(--col-primary-5);
						--btn-border-col_hover: var(--col-primary-4);
					}
					&.secondary {
						--btn-text-col_hover: var(--col-secondary-10);
						--btn-bg-col_hover: var(--col-secondary-4);
						--btn-border-col_hover: var(--col-secondary-5);
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
				padding-right: calc(var(--decorative-btn-padding) + var(--deco-dot-size));
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
