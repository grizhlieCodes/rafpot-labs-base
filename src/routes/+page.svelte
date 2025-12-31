<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

	import type { ButtonProps } from '$lib/components/ui/types';

	type ButtonPropsWithContent = ButtonProps & { content: string };

	const buttons: ButtonPropsWithContent[] = [
		{ content: 'Sign up', variant: 'secondary', size: 'small', href: null, decorative: true },
		{ content: 'Sign up', variant: 'secondary', size: 'medium', href: null, decorative: true },
		{ content: 'Sign up', variant: 'secondary', size: 'default', href: null, decorative: true },
		{ content: 'Sign up', variant: 'secondary', size: 'large', href: null, decorative: true },
		{ content: 'Sign up', variant: 'secondary', size: 'extra_large', href: null, decorative: true }
	];
</script>

<div class="daddy">
	<div class="buttons-container fluid-row">
		{#each buttons as btn, _i (btn.size)}
			<Button
				variant={btn.variant}
				size={btn.size}
				href={btn.href}
				decorative={btn.decorative}
				onclick={() => console.log('hehe')}
			>
				{btn.content}
			</Button>
		{/each}
	</div>
</div>

<style>
	.daddy {
		background-color: black;
	}
	.buttons-container {
		width: 100%;
		min-height: 100vh;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
	}
</style>
