<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

	import type { ButtonProps } from '$lib/components/ui/types';

	type ButtonPropsWithContent = ButtonProps & { content: string };

	const buttons: ButtonPropsWithContent[] = [
		{ content: 'Sign up', variant: 'secondary', size: 'small', href: 'https://google.com' },
		{ content: 'Sign up', variant: 'secondary', size: 'medium', href: 'https://google.com' },
		{ content: 'Sign up', variant: 'secondary', size: 'default', href: 'https://google.com' },
		{ content: 'Sign up', variant: 'secondary', size: 'large', href: 'https://google.com' },
		{ content: 'Sign up', variant: 'secondary', size: 'extra_large', href: 'https://google.com' }
	];
</script>

<div class="daddy">
	<div class="buttons-container fluid-row">
		{#each buttons as btn, _i (btn.size)}
			<Button variant={btn.variant} size={btn.size} href={btn.href}>
				{btn.content}
			</Button>
		{/each}
	</div>
</div>

<style>
	.daddy {
		background-color: var(--col-base-0);
	}
	.buttons-container {
		width: 100%;
		min-height: 100vh;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
	}
</style>
