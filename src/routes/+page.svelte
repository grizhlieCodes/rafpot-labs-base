<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

	import type { ButtonProps } from '$lib/components/ui/types';
	import { arrayFromNumber } from '$lib/scripts/utils';

	type ButtonPropsWithContent = ButtonProps & { content: string };

	const buttons: ButtonPropsWithContent[] = [
		{ content: 'Sign up', variant: 'brand', size: 'small', href: null, decorative: true },
		{ content: 'Sign up', variant: 'brand', size: 'medium', href: null, decorative: true },
		{ content: 'Sign up', variant: 'brand', size: 'default', href: null, decorative: true },
		{ content: 'Sign up', variant: 'brand', size: 'large', href: null, decorative: true },
		{ content: 'Sign up', variant: 'brand', size: 'extra-large', href: null, decorative: true }
	];

</script>

<div class="daddy">
	<div class="p-container">
		{#each arrayFromNumber(6).reverse() as h}
		  <h1 style="font-size: var(--size-heading-{h});">Paragraph {h}</h1>
		{/each}
	</div>
	<div class="p-container">
		{#each arrayFromNumber(8) as p}
		  <p class="p{p}">Paragraph {p}</p>
		{/each}
	</div>
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

	.h1-container {
		width: 100%;
		padding: var(--spacing-20);
		display: grid;
		place-items: center;
		color: white;
		font-size: var(--size-heading-6);
		transition: font-size 250ms ease-in-out;
	}
	.p-container {
		width: 100%;
		padding: var(--spacing-20);
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		color: white;
		transition: font-size 250ms ease-in-out;
	}

	.p1 {
		font-size: var(--size-body-1);
	}
	.p2 {
		font-size: var(--size-body-2);
	}
	.p3 {
		font-size: var(--size-body-3);
	}
	.p4 {
		font-size: var(--size-body-4);
	}
	.p5 {
		font-size: var(--size-body-5);
	}
	.p6 {
		font-size: var(--size-body-6);
	}
	.p7 {
		font-size: var(--size-body-7);
	}
	.p8 {
		font-size: var(--size-body-8);
	}
</style>
