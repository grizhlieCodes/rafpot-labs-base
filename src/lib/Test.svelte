<script lang="ts">
	import type { Snippet } from 'svelte';
	let { style, children, ...otherProps }: { style: 'angry' | 'happy' | 'sad'; children: Snippet } =
		$props();
</script>

<p class={style} {...otherProps}>
	{@render children?.()}
</p>

<style>
	p {
		&.angry {
			color: red;
		}
		&.happy {
			color: orange;
		}
		&.sad {
			color: blue;
		}
	}
</style>
