# CSS System

## Original Goal
Initially I read this article titled ["vanilla css is all you need"](https://www.zolkos.com/2025/12/03/vanilla-css-is-all-you-need) and I
was intrigued. I haven't really used anything but Tailwind since early 2022 so i sort of missed a wave of new features. I wanted to see if a system could be vanilla only and if it wouldn't slow me down too much. This is based on:
1. Adding new CSS features into my codebase
2. Writing the CSS and relying heavily on a simple design-token system powered by CSS variables
3. Readability of the CSS! I need everything I do to be readable as my memory tends to be quite poor.

I also have a few issues with Tailwind, which is a shame as it's so damn good to write with.

> [!NOTE]
> Most issues I have with tailwind are mostly due to how my brain works. Worth pointing out I love working with it, I love writing it, but I do not enjoy reading it. Perhaps LLMs will remove this obstacle soon.

## Tailwind issue 1: Readability
I find it harder to read Tailwind when i go back into a project. Something about css classes being scattered horizontally throws my brain off. 
And yes, I do know what each class means. I just read faster when scanning vertically. Which honestly is not great since I love writing Tailwind, it's just so damn fast.

## Tailwind issue 2: CSS in JS becomes a norm for components with variants
A lot of the time I will have to inject tailwind into Javascript. You might have seen variables like
`const baseStyles = "tailwind-classes-go-here"`. There's a good reason for this, it's hard to apply the correct tailwind classes without using some javascript when having any component with variants. You either need to add some classes based on a variant, or ignore them. The following is from the button component from [shadcn-svelte](https://www.shadcn-svelte.com/):

```html
<script lang="ts" module>
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";

	export const buttonVariants = tv({
		base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs",
				destructive:
					"bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white shadow-xs",
				outline:
					"bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs",
				ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
				"icon-sm": "size-8",
				"icon-lg": "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>
```

This is probably the best way to do this. Whilst I don't mind it, i also don't like having CSS in javascript. You also lose the intellisense in VSCode/Zed so that sucks.

It's definitely a preference thing. I'm guessing react folks won't mind this since all of the styling in JSX is in javascript.

But I use SvelteKit exclusively, which comes with scoped styles per component out of the box, so it's certainly not a preference.

## Tailwind issue 3: Not everything should be tailwind
When Tailwind introduced [Arbitrary Values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values), I was pretty damn excited about it.
The ability to just add a custom value was pretty damn useful in some situations: `border-[0.5px]`. 

Then we got [Arbitrary Properties](https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties) and I was pretty happy with this. We could now just write css with tailwind `[padding:1rem_2rem]`. 
Of course this is only useful when Tailwind doesn't have a utility for something or when you want to set a css variable `[--widget-padding:2rem]`. And this is great in a way, you still get all the benefits of Tailwind with this. The class is only built once into your CSS, it doesn't increase the size of the total css at all and everybody's happy. 

Except... it looks crap. It's like going a full circle in terms of writing css (I'm excluding things like bundle sizes as it doesn't concern me massively at this point in time).

I just don't see a big gain by doing this. Why am i writing literal css as a class? Just how unreadable is my component supposed to be? And don't even get me started on how some classes can look like by the time you're inspecting them in the browser...

```css
.\[\&\>\*\]\:col-start-2>* {
  grid-column-start: 2;
}```
