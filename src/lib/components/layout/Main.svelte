<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getHeaderContext } from '../navigation/header/headerContext';
	let { children }: { children: Snippet } = $props();

  const h = getHeaderContext() ?? false;
  let mainMarginTop = $derived(h.headerIsFixed ? `--mt: ${h.headerHeight}px;`: '')

</script>

<main style={mainMarginTop} class="mt-(--mt)">
	{@render children?.()}
</main>
