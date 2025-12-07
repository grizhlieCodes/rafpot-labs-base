import type { Snippet } from 'svelte';

export type ButtonProps = {
	children: Snippet;
	href: string;
	disabled: boolean | null;
	class: string | null;
	variant: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | null;
	size: 'small' | 'medium' | 'default' | 'large' | 'extra_large';
};
