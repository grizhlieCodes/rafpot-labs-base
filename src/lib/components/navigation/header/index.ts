import HeaderRoot from './Header.svelte';
import Left from './HeaderLeft.svelte';
import Right from './HeaderRight.svelte';
import DesktopNav from './HeaderDesktopNav.svelte';
import MobileNav from './HeaderMobileNav.svelte';
import DesktopLink from './HeaderDesktopLink.svelte';

type HeaderComponent = typeof HeaderRoot & {
	Left: typeof Left;
	Right: typeof Right;
	DesktopNav: typeof DesktopNav;
	MobileNav: typeof MobileNav;
	DesktopLink: typeof DesktopLink;
};

const Header: HeaderComponent = Object.assign(HeaderRoot, {
	Left,
	Right,
	DesktopNav,
	MobileNav,
	DesktopLink
});

export default Header;
