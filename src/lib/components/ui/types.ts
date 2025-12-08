import type { Snippet } from 'svelte';

export type ButtonProps = {
	children?: Snippet;
	href?: string | undefined | null;
	disabled?: boolean | undefined | null;
	class?: string | undefined | null;
	variant?: 'base' | 'brand' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
	size?: 'small' | 'medium' | 'default' | 'large' | 'extra_large';
	ref?: HTMLElement | undefined | null;
	type?: 'button' | 'submit' | undefined | null;
	decorative?: boolean;
};

// export type CustomButtonProps = {
// 	// children: Snippet;
// 	// href: HTMLAnchorAttributes["href"];
// 	// disabled: boolean | null;
// 	class: string | null;
// 	variant: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
// 	size: 'small' | 'medium' | 'default' | 'large' | 'extra_large';
// 	// ref?: HTMLElement | null;
// };

// import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
// import type { WithoutChildren } from "svelte-toolbelt";
// import type { WithChildren } from "../../shared/index.js";

// export type ButtonRootPropsWithoutHTML = WithChildren<{
//     ref?: HTMLElement | null;
// }>;

// type AnchorElement = ButtonRootPropsWithoutHTML & WithoutChildren<Omit<HTMLAnchorAttributes, "href" | "type">> & {
//     href: HTMLAnchorAttributes["href"];
//     type?: never;
//     disabled?: HTMLButtonAttributes["disabled"];
// };

// type ButtonElement = ButtonRootPropsWithoutHTML & WithoutChildren<Omit<HTMLButtonAttributes, "type" | "href">> & {
//     type?: HTMLButtonAttributes["type"];
//     href?: never;
//     disabled?: HTMLButtonAttributes["disabled"];
// };

// export type ButtonRootProps = CustomButtonProps & AnchorElement | ButtonElement;
