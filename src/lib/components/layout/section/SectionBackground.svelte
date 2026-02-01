<script lang="ts">
	type SectionBackgroundProps = {
		contentFullWidth?: boolean;
		class?: string;
	};
	import { sectionStyles } from './Section.svelte';
	import { cn } from '$lib/scripts/utils';
	let { contentFullWidth = true, class: classList = '' }: SectionBackgroundProps = $props();

	let derivedContentStyles = $derived({
		contentFullWidthStyling: contentFullWidth ? 'col-start-1 -col-end-1' : 'col-start-2 -col-end-2'
	});

	let contentStyling = $derived(cn(sectionStyles.backgroundBase, Object.values(derivedContentStyles).join(' '), classList));
</script>

<div class="section-background {contentStyling}"></div>
