<script>
	import Section from '$lib/components/layout/section/index';

	// import Button from '$lib/components/ui/button/Button.svelte';

	const toggleBodyDarkmode = () => {
		if (!document.documentElement) return;
		document.documentElement.classList.toggle('dark');
		// document.body.setAttribute('dark-mode', `${!isDark}`);
	};
</script>

<div class="grid-wrapper overflow-hidden min-h-dvh">
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
			<button class="bg-amber-10 w-max px-2.5 py-1" onclick={toggleBodyDarkmode}>Toggle Baby!</button>
		</Section.Content>
		<Section.Border></Section.Border>
	</Section>
</div>
