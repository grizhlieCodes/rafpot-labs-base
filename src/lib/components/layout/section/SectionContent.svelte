<script module lang="ts">
	export type SectionContentProps = {
		contentFullWidth?: boolean;
		class?: string;
		yPadding?: ZeroToTwenty;
		xPadding?: ZeroToTwenty;
		xBorder?: boolean;
		children?: Snippet;
	};
</script>

<script>
	import type { Snippet } from 'svelte';
	import { sectionStyles, type ZeroToTwenty } from './Section.svelte';
	import { cn } from '$lib/scripts/utils';
	let { contentFullWidth = false, class: classList = '', yPadding, xPadding, xBorder = true, children }: SectionContentProps = $props();

	let derivedContentStyles = $derived({
		contentFullWidthStyling: contentFullWidth ? 'col-start-1 -col-end-1' : 'col-start-2 -col-end-2',
		xPaddingStyling: xPadding ? sectionStyles.xPaddingOptions[xPadding] : sectionStyles.xPaddingOptions[0],
		yPaddingStyling: yPadding ? sectionStyles.yPaddingOptions[yPadding] : sectionStyles.yPaddingOptions[0]
	});

	let contentStyling = $derived(cn(sectionStyles.contentBase, Object.values(derivedContentStyles).join(' '), xBorder ? 'border-surface-5 dark:border-surface-13 border-x border-solid duration-(--duration-global-cols) transition-colors' : '', classList));
</script>

<div class="section-content {contentStyling} ">
	{@render children?.()}
</div>
