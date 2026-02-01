<script lang="ts">
	import Section from '$lib/components/layout/section/index';
	import type { ButtonSize, ButtonVariant } from '$lib/components/ui/button/Button.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';

	// import Button from '$lib/components/ui/button/Button.svelte';

	const toggleBodyDarkmode = () => {
		if (!document.documentElement) return;
		document.documentElement.classList.toggle('dark');
		// document.body.setAttribute('dark-mode', `${!isDark}`);
	};

	const decorative = true;
	const variants: Array<ButtonVariant> = ['base','primary', 'secondary', 'danger', 'outline', 'ghost', 'link'];

	const buttons: Array<{size: ButtonSize, class: string, decorative: boolean }> = [
		{ size: 'small', class: 'w-max', decorative },
		{ size: 'base', class: 'w-max', decorative },
		{ size: 'large', class: 'w-max', decorative }
	];
</script>

<div class="grid-wrapper min-h-dvh overflow-hidden">
	<Section type="section" id="test" labelId="hehe">
		<Section.Background></Section.Background>
		<Section.Content contentFullWidth={false}>
			<button class="bg-amber-10 w-max px-2.5 py-1" onclick={toggleBodyDarkmode}>Toggle Baby!</button>
		</Section.Content>
		<Section.Border></Section.Border>
	</Section>

	<Section type="div">
		<Section.Background></Section.Background>
		<Section.Content yPadding="4" xPadding="4" inlineBorder={false}>
			<div class="flex flex-col gap-4">
				{#each variants as variant, _i (variant)}
					<div class="flex flex-col gap-1.5">
						{#each buttons as button, btnIndex (btnIndex)}
							<Button {variant} {...button}>{variant}</Button>
						{/each}
					</div>
				{/each}
			</div>
		</Section.Content>
		<Section.Border></Section.Border>
	</Section>
</div>
