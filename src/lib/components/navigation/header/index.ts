import HeaderRoot from './Header.svelte';
import Left from './HeaderLeft.svelte';
import Right from './HeaderRight.svelte';
import DesktopNav from './HeaderDesktopNav.svelte';
import MobileNav from './HeaderMobileNav.svelte';

type HeaderComponent = typeof HeaderRoot & {
	Left: typeof Left;
	Right: typeof Right;
	DesktopNav: typeof DesktopNav;
	MobileNav: typeof MobileNav;
};

const Header: HeaderComponent = Object.assign(HeaderRoot, {
	Left,
	Right,
	DesktopNav,
	MobileNav
});

export default Header;
