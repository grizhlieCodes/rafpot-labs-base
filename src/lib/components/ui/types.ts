import type { Snippet } from 'svelte';

export type ButtonProps = {
  children?: Snippet;
  href?: string | undefined | null;
  disabled?: boolean | undefined | null;
  class?: string | undefined | null;
  variant?: 'base' | 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'default' | 'large' | 'extra-large';
  ref?: HTMLElement | undefined | null;
  type?: 'button' | 'submit' | undefined | null;
  onclick?: () => void;
  decorative?: boolean;
};
