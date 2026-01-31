<script module lang="ts">
	export type SectionBackgroundProps = {
		contentFullWidth?: boolean;
		class?: string;
	};
</script>

<script>
	import { sectionStyles } from './Section.svelte';
	import { cn } from '$lib/scripts/utils';
	let { contentFullWidth = true, class: classList = '' }: SectionBackgroundProps = $props();

	let derivedContentStyles = $derived({
		contentFullWidthStyling: contentFullWidth ? 'col-start-1 -col-end-1' : 'col-start-2 -col-end-2',
	});

	let contentStyling = $derived(cn(sectionStyles.backgroundBase, Object.values(derivedContentStyles).join(' '),  classList));
</script>

<div class="section-content {contentStyling}"></div>
