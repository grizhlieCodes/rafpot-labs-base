import type { Snippet } from 'svelte';

export type ButtonProps = {
	children?: Snippet;
	href?: string | undefined | null;
	disabled?: boolean | undefined | null;
	class?: string | undefined | null;
	variant?: 'base' | 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'link';
	size?: 'small' | 'base' | 'large';
	ref?: HTMLElement | undefined | null;
	type?: 'button' | 'submit' | undefined | null;
	onclick?: () => void;
};
