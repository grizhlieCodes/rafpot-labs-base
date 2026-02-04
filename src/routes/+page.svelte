<script lang="ts">
	import Section from '$lib/components/layout/section/index';
	import type { ButtonSize, ButtonVariant } from '$lib/components/ui/Button.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import type { TextStyle, TextType } from '$lib/components/ui/Text.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const toggleBodyDarkmode = () => {
		if (!document.documentElement) return;
		document.documentElement.classList.toggle('dark');
	};

	const variants: Array<ButtonVariant> = ['base', 'baseInvert', 'primary', 'secondary', 'danger', 'outline', 'ghost', 'link'];

	const buttons: Array<{ size: ButtonSize; class: string }> = [
		{ size: 'small', class: 'w-max' },
		{ size: 'base', class: 'w-max' },
		{ size: 'large', class: 'w-max' }
	];

	const texts: Array<{ type: TextType; style: TextStyle; class?: string }> = [
		{ type: 'h1', style: 'display-xs' },
		{ type: 'h1', style: 'display-sm' },
		{ type: 'h1', style: 'display-base' },
		{ type: 'h1', style: 'display-lg' },
		{ type: 'h1', style: 'display-xl' },
		{ type: 'h2', style: 'heading-xs' },
		{ type: 'h2', style: 'heading-sm' },
		{ type: 'h2', style: 'heading-base' },
		{ type: 'h2', style: 'heading-lg' },
		{ type: 'h2', style: 'heading-xl' },
		{ type: 'p', style: 'para-xs' },
		{ type: 'p', style: 'para-xs-2' },
		{ type: 'p', style: 'para-sm' },
		{ type: 'p', style: 'para-sm-2' },
		{ type: 'p', style: 'para-base' },
		{ type: 'p', style: 'para-lg' },
		{ type: 'p', style: 'para-xl' },
		{ type: 'p', style: 'button-sm', class: 'text-surface-12 dark:text-surface-6' },
		{ type: 'p', style: 'button-base', class: 'text-surface-12 dark:text-surface-6' },
		{ type: 'p', style: 'button-lg', class: 'text-surface-12 dark:text-surface-6' },
		{ type: 'span', style: 'overline-sm' },
		{ type: 'span', style: 'overline-base' },
		{ type: 'span', style: 'overline-lg' }
	];
</script>

<div class="grid-wrapper min-h-[200vh] overflow-hidden">
	<Section type="div">
		<!-- <Section.Background class="bg-linear-to-b "></Section.Background> -->
		<Section.Content yPadding="0" xPadding="4" inlineBorder={false}>
			<div class="flex flex-col gap-4">
				<Text type="h1" style="display-xl">What the fuck</Text>
				<!-- {#each variants as variant, _i (variant)}
					<div class="flex flex-col gap-1.5">
						{#each buttons as button, btnIndex (btnIndex)}
							<Button onclick={toggleBodyDarkmode} {variant} {...button}>{variant}</Button>
						{/each}
					</div>
				{/each} -->

				<!-- {#each texts as text}
					<Text {...text}>
						A wild text appears: {text.style}
					</Text>
				{/each} -->
			</div>
		</Section.Content>
	</Section>
</div>
