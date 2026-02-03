<script lang="ts">
	import BorderX from '$lib/components/decorative/BorderX.svelte';
	import Section from '$lib/components/layout/section/index';
	import type { ButtonSize, ButtonVariant } from '$lib/components/ui/Button.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const toggleBodyDarkmode = () => {
		if (!document.documentElement) return;
		document.documentElement.classList.toggle('dark');
	};

	const variants: Array<ButtonVariant> = ['base', 'baseInvert','primary', 'secondary', 'danger', 'outline', 'ghost', 'link'];

	const buttons: Array<{size: ButtonSize, class: string }> = [
		{ size: 'small', class: 'w-max' },
		{ size: 'base', class: 'w-max' },
		{ size: 'large', class: 'w-max' }
	];
</script>

<div class="grid-wrapper min-h-dvh overflow-hidden">

	<Section type="div">
		<Section.Background></Section.Background>
		<Section.Content yPadding="4" xPadding="4" inlineBorder={false}>
			<div class="flex flex-col gap-4">
				{#each variants as variant, _i (variant)}
					<div class="flex flex-col gap-1.5">
						{#each buttons as button, btnIndex (btnIndex)}
							<Button onclick={toggleBodyDarkmode} {variant} {...button}>{variant}</Button>
						{/each}
					</div>
				{/each}
			</div>
		</Section.Content>
	</Section>

</div>
