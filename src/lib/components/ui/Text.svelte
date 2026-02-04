<script module lang="ts">
	export type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'cite' | 'ul' | 'ol' | 'div' | 'li';
	export type Styles = {
		h1: string;
		h2: string;
		h3: string;
		h4: string;
		h5: string;
		h6: string;
		h7: string;
		paraXs: string;
		paraSm: string;
		paraBase: string;
		paraLg: string;
		paraXl: string;
		overline: string;
		quote: string;
		cite: string;
		sr: string;
	};

	// See app.css for the utility classes that mirroir this type
	export type TextStyle =
		| 'display-xs'
		| 'display-sm'
		| 'display-base'
		| 'display-lg'
		| 'display-xl'
		| 'heading-xs'
		| 'heading-sm'
		| 'heading-base'
		| 'heading-lg'
		| 'heading-xl'
		| 'para-xs'
		| 'para-xs-2'
		| 'para-sm'
		| 'para-sm-2'
		| 'para-base'
		| 'para-lg'
		| 'para-xl'
		| 'button-sm'
		| 'button-base'
		| 'button-lg'
		| 'button-sm'
		| 'button-base'
		| 'button-lg'
		| 'overline-sm'
		| 'overline-base'
		| 'overline-lg';
		

	export const defaultTypeStylePairings: Record<TextType, TextStyle> = {
		'h1': 'heading-xl',
		'h2': 'heading-lg',
		'h3': 'heading-base',
		'h4': 'heading-sm',
		'h5': 'heading-xs',
		'h6': 'heading-xs',
		'p': 'para-base',
		'span': 'para-base',
		'blockquote': 'button-lg',
		'cite': 'button-base',
		'ul': 'para-base',
		'ol': 'para-base',
		'div': 'para-base',
		'li': 'para-base'
	}

	export type TextProps = {
		type: TextType;
		style?: TextStyle;
		id?: string;
		class?: string;
		children: Snippet;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/scripts/utils';
	import type { Snippet } from 'svelte';

	let { type = 'p', style, id, class: className, children, ...restProps }: TextProps = $props();

	let textStyles = $derived(cn(style ?? defaultTypeStylePairings[type], className));
</script>

<svelte:element this={type} {id} class={textStyles} {...restProps}>
	{@render children?.()}
</svelte:element>