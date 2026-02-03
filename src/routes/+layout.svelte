<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/navigation/header/index';
	import { resolve } from '$app/paths';
	import { NAV_LINKS } from '$lib/data/navLinks';
	import { HeaderStoreBuilder, type HeaderStoreBuilderInterface } from '$lib/components/navigation/header/headerStore.svelte';
	import { setHeaderContext } from '$lib/components/navigation/header/headerContext';

	let { children } = $props();

	const headerStore: HeaderStoreBuilderInterface = new HeaderStoreBuilder()
	setHeaderContext(headerStore)
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header>
	<Header.Left href={resolve('/')}>
		<span>ANTARA</span>
	</Header.Left>
	<Header.DesktopNav navLinks={NAV_LINKS}></Header.DesktopNav>
	<Header.MobileNav navLinks={NAV_LINKS}></Header.MobileNav>
	<Header.Right navLinks={NAV_LINKS}></Header.Right>
</Header>

{@render children()}
