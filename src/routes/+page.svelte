<script>
	import Section from "$lib/components/layout/section/index";

	// import Button from '$lib/components/ui/button/Button.svelte';

	const toggleBodyDarkmode = () => {
		if (!document.documentElement) return;
		document.documentElement.classList.toggle('dark')
		// document.body.setAttribute('dark-mode', `${!isDark}`);
	};
</script>


<Section>
  <Section.Background></Section.Background>

  <Section.Content contentFullWidth={false} >
    <button class="px-2.5 py-1 bg-amber-10 w-max" onclick={toggleBodyDarkmode}>Toggle Baby!</button>
  </Section.Content>

</Section>
