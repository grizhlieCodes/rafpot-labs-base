<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/navigation/header/index';
	import { resolve } from '$app/paths';
	import { NAV_LINKS } from '$lib/data/navLinks';
	import { HeaderStoreBuilder, type HeaderStoreBuilderInterface } from '$lib/components/navigation/header/headerStore.svelte';
	import { setHeaderContext } from '$lib/components/navigation/header/headerContext';
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';
	import { dm } from '$lib/stores/darkMode.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Main from '$lib/components/layout/Main.svelte';

	let mounted = $state(false);

	$effect(() => {
		if (!mounted) {
			mounted = true;
			dm.updatedBasedOnLocalStorage();
			dm.setDmInLocalStorage();
			dm.setDarkClass();
		}
	});

	$effect(() => {
		if (dm.dm) dm.setDarkClass();
	});

	let { children } = $props();

	const headerStore: HeaderStoreBuilderInterface = new HeaderStoreBuilder();
	setHeaderContext(headerStore);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header isFixed={true}>
	<Header.Left href={resolve('/')}>
		<span>ANTARA</span>
	</Header.Left>
	<Header.DesktopNav navLinks={NAV_LINKS}></Header.DesktopNav>
	<Header.MobileNav navLinks={NAV_LINKS}></Header.MobileNav>
	<Header.Right navLinks={NAV_LINKS} class=" p-0 ">
		<Button variant="base" onclick={() => dm.toggle()}>
			{#if dm.dm}
				<Sun class="size-6"></Sun>
			{:else}
				<Moon class="size-6"></Moon>
			{/if}
		</Button>
	</Header.Right>
</Header>

<Main>
	{@render children()}
</Main>
