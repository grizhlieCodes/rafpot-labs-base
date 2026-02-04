export interface HeaderStoreBuilderInterface {
	mobMenuOpen: boolean;
	headerRef: HTMLElement | undefined;
	windowInnerWidth: number | undefined;
	headerIsFixed: boolean;
	readonly headerHeight: number | null;
}

export class HeaderStoreBuilder implements HeaderStoreBuilderInterface {
	mobMenuOpen = $state<boolean>(false);
	headerRef = $state<HTMLElement | undefined>();
	headerIsFixed = $state<boolean>(false);
	private headerHeightState = $derived<number | null>(this.headerRef ? this.headerRef.getBoundingClientRect().height : null);
	windowInnerWidth = $state<number>();

	constructor() {
    // Effect only works if we initialise class inside of a component
		$effect(() => {
			if (!document.documentElement) return;
			if (this.mobMenuOpen) document.documentElement.classList.add('overflow-hidden', '[scrollbar-gutter:stable]');
			else document.documentElement.classList.remove('overflow-hidden', '[scrollbar-gutter:stable]');
		});

		$effect(() => {
			if (this.windowInnerWidth && this.windowInnerWidth >= 900 && this.mobMenuOpen) this.mobMenuOpen = false;
		});
	}

	get headerHeight() {
		return this.headerHeightState;
	}
}