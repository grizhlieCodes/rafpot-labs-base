<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import type { ButtonProps } from '$lib/components/ui/types';

	// type Paragraphs = Array<{
	// 	style: 'angry' | 'happy' | 'sad';
	// 	content: string;
	// }>;

	// let paragraphs: Paragraphs = [
	// 	{ style: 'angry', content: 'Angreeeeh' },
	// 	{ style: 'happy', content: 'I love life1!!!!' },
	// 	{ style: 'sad', content: "What's the point....." }
	// ];

	const buttons = [
		{ content: 'Sign Up', variant: 'primary', size: 'default', href: 'https://google.com' }
	];
</script>

<!-- {#each paragraphs as { style, content }, _i (content)}
	<Test {style}>
		{content}
	</Test>
{/each} -->

<div class="daddy">
	<div class="buttons-container fluid-row">
		{#each buttons as btn, _i (btn.content)}
			<Button variant={btn.variant} size={btn.size} href={btn.href}>
				{btn.content}
			</Button>
		{/each}
	</div>
</div>

<style>
	/* .daddy {
		width: 100%;
		background: red;
		min-height: 100vh;
		container-type: inline-size;
	} */

	.buttons-container {
		width: 100%;
		min-height: 100vh;
		justify-content: center;
		align-items: center;
		background: var(--col-white);
	}

	/* @container (width > 600px){
		.buttons-container {

		}
	} */
</style>
